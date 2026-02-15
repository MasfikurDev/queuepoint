


async function run() {
  console.log('🌱 Seeding database...\n');
  console.log('\n🌱 Seeding complete');
}

run().catch(err => {
  console.error('❌ Seeding failed');
  console.error(err);
  process.exit(1);
});
