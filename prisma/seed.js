/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Inventory Seeding
  const inventory = [
    {
      name: 'Lace Wedding Dress',
      category: 'Seamstress',
      sku: 'WD-001',
      stockAvailable: 4,
      stockTotal: 10,
      price: 150.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnBTx9MgjgF3D_RnxK__6uKvKSTUNAPywCj_mSvwyWZaK7amnsimtzIxDYAH3HGiRSQhD4ZBkFGQVLRzSK9s1XeOIP1gTUm6ekH7T0rna2O79uuQlIWCE435pWGmKkgaM-vFZPARTkhnvmrph3m3egJ8r5_ujaAYleqEDm74asjfuLCWkJX7Of28KadoRNaIxXHDLlMGChG3KQTCUtxozN-UAoKm_tdrLla4A2pYq9vsbyVvOFD8dg3fXDGQuvN6VhtFECBSwIdaYG'
    },
    {
      name: 'Folding Gold Chair',
      category: 'Decor',
      sku: 'DC-442',
      stockAvailable: 95,
      stockTotal: 100,
      price: 5.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArbaMz1BrPi5I8Vi1iidf3XSGh2epG4svMdqI3-3ZcLR7UiZdfc9W21j_aJpiUHnFFi4J1cuQ0MJcJyqsTrbQkE5oY3chuSiK7sTuS3mC3rQq185ff7NNDLlC61hh1yu7_C1aJlLbwP6zpmZgYWJPyyK1zYMLuKFFCJl8ql7N4y_gUQP2nESNvll_eM7bbY919FK56DDd2I_lU-6zcJ-k0n0X7pbdP2N9wXROldAiRtoFXKjHskbmpsjk1cqu7inGqrDpC4-TFvfSi'
    },
    {
      name: 'Silk Ribbon Spool',
      category: 'Supplies',
      sku: 'SP-12',
      stockAvailable: 2,
      stockTotal: 20,
      price: 12.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhgoMggCl2ZZo4W__--3HkVANJjSk8PGL3jHeTBNbjAo8qMnZVsyIl2g-iwI4_nw_uIPqe92HQfSttP_km-7FBfgsaubuXtuWWd-LhOyAY5084t5gOI472yuFKYrmcwDU-9tr5igbIAoYVRHrBdKbNppbTheDV9VzYoF5gwDLsGMbSLhT4K8vnBFgL7Rh0GxHAgeL-HwcpyU80Zne3TagkWDwLnH_rcf8RdMBya2YBzB9y1ZyYLCW1eX5nSOfdLqlKIY-LKZBqqKMl'
    },
    {
      name: 'Floral Centerpiece',
      category: 'Decor',
      sku: 'DC-109',
      stockAvailable: 15,
      stockTotal: 88,
      price: 45.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBnJ3cUhIjJmvCaIa07tQFP-P39ug4rZPv6JmCmrtCf8GG5L1Ipa9GG_ArtC8ehRtWl0ODQPSU7ZoUo9FpFr0peLHGHJgmVY45LnJtdw-HYU7xQbRw9mDap2hrJVTp9xoBsaMlCeP4B9RSfeJaYc0OAwZcnStj0vUCY9aECwDievcQAvegS5ijt1Z59UWe2tZFLM640VaBhIRaQ3QsISRLD7aISC9jweeeXMrSOIDR-yuIAzW4TcOdG9fCyLe8DSRVhDHUEsUngKm5'
    },
    {
      name: 'Vintage Veil',
      category: 'Rentals',
      sku: 'WD-088',
      stockAvailable: 1,
      stockTotal: 20,
      price: 60.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFur68fB2NId6S5h22m_Lf0h_rlJrxRkh7kX78DqvVUYl4vfkq8oVAuFnMcEe6AUvAvnQ459NS07UVvtEdhFSnG5p5YkMoS0jJTk7CkqAPaRKWF94egTTxzi7MfnLDwtO-a4Z-9yYozy2gvQaMj8N5V7R_tYiy6U2dsDd2qomCc6HxW1xYYlFwDUrFow6swS95r_-dThSGB0kB2Ca0JHjANLh1JfbwTkwf0kKocoAkZt0CPXZ7iqLLl9ySbMSykD5fx0k9O8MD3ceo'
    }
  ];

  for (const item of inventory) {
    await prisma.inventoryItem.upsert({
      where: { sku: item.sku },
      update: {},
      create: item,
    });
  }

  // Customer Seeding
  const customers = [
    { name: 'Sarah Jenkins', email: 'sarah.j@example.com', phone: '(555) 123-4567', totalSpent: 4250.00 },
    { name: 'Michael Ross', email: 'm.ross@logistics.com', phone: '(555) 987-6543', totalSpent: 1120.00 },
    { name: 'Elena Rodriguez', email: 'elena@fashion.co', phone: '(555) 444-2211', totalSpent: 850.00 },
    { name: 'David Miller', email: 'dmiller@corp.com', phone: '(555) 222-3333', totalSpent: 6000.00 },
    { name: 'Claire Thompson', email: 'claire.t@example.com', phone: '(555) 888-9999', totalSpent: 12000.00 }
  ];

  for (const customer of customers) {
    await prisma.customer.upsert({
      where: { email: customer.email },
      update: {},
      create: customer,
    });
  }

  // Helper to find customer by email
  const getCust = async (email) => await prisma.customer.findUnique({ where: { email } });

  // Invoices Seeding
  const sarah = await getCust('sarah.j@example.com');
  const michael = await getCust('m.ross@logistics.com');
  const elena = await getCust('elena@fashion.co');
  const david = await getCust('dmiller@corp.com');

  const invoices = [
    { invoiceNumber: 'INV-2023-001', customerId: sarah.id, serviceType: 'Wedding Planning', amount: 4250.00, status: 'Paid', issueDate: new Date('2023-10-24') },
    { invoiceNumber: 'INV-2023-042', customerId: michael.id, serviceType: 'Rentals', amount: 1120.00, status: 'Overdue', issueDate: new Date('2023-11-02') },
    { invoiceNumber: 'INV-2023-045', customerId: elena.id, serviceType: 'Seamstress', amount: 850.00, status: 'Partial', issueDate: new Date('2023-11-05') },
    { invoiceNumber: 'INV-2023-051', customerId: david.id, serviceType: 'Wedding Planning', amount: 6000.00, status: 'Draft', issueDate: new Date('2023-11-10') }
  ];

  for (const inv of invoices) {
    await prisma.invoice.upsert({
      where: { invoiceNumber: inv.invoiceNumber },
      update: {},
      create: inv,
    });
  }

  // Events Seeding
  const claire = await getCust('claire.t@example.com');
  const events = [
    { name: 'Thompson Wedding', customerId: claire.id, type: 'Wedding', date: new Date('2023-10-24'), venue: 'Rosewood Estate', status: 'Planning', progress: 70 },
    { name: 'Global Tech Gala', customerId: michael.id, type: 'Gala', date: new Date('2023-11-02'), venue: 'Skyline Ballroom', status: 'Finalized', progress: 94 },
    { name: 'Miller 50th Birthday', customerId: david.id, type: 'Party', date: new Date('2023-12-15'), venue: 'Private Residence', status: 'Concept', progress: 20 }
  ];

  for (const evt of events) {
    // Basic check to avoid duplicates for seeding simplicity
    const existing = await prisma.event.findFirst({ where: { name: evt.name } });
    if (!existing) {
      await prisma.event.create({ data: evt });
    }
  }

  // Vendors Seeding
  const vendors = [
    { name: 'Savory Soirees Catering', category: 'Catering', status: 'Paid', rating: 4.9, phone: '(555) 123-4567', email: 'hello@savorysoirees.com' },
    { name: 'Golden Hour Frames', category: 'Photography', status: 'Booked', rating: 4.8, phone: '(555) 987-6543', email: 'contact@goldenhour.co' },
    { name: 'Elite Alterations', category: 'Seamstress', status: 'Shortlisted', rating: 5.0, phone: '(555) 000-1111', email: 'tailor@elitealt.com' }
  ];

  for (const v of vendors) {
    // Simple check
    const existing = await prisma.vendor.findFirst({ where: { name: v.name } });
    if (!existing) {
      await prisma.vendor.create({ data: v });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
