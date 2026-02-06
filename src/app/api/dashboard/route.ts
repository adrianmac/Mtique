import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const upcomingEvents = await prisma.event.findMany({
      take: 5,
      orderBy: { date: 'asc' },
      include: { customer: true }
    });

    const recentInvoices = await prisma.invoice.findMany({
      take: 5,
      orderBy: { issueDate: 'desc' },
      include: { customer: true }
    });

    // Simple aggregations (in a real app, might want optimized queries)
    const totalRevenue = await prisma.invoice.aggregate({
        _sum: { amount: true },
        where: { status: 'Paid' }
    });

    const overdueCount = await prisma.invoice.count({
        where: { status: 'Overdue' }
    });

    return NextResponse.json({
      upcomingEvents,
      recentInvoices,
      stats: {
        totalRevenue: totalRevenue._sum.amount || 0,
        overdueCount
      }
    });
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}
