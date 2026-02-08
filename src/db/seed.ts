import { AccountsSeeder } from "./seeders/AccountsSeeder.js";


async function run() {
  console.log('🌱 Seeding database...\n');

  await AccountsSeeder.run();

  console.log('\n🌱 Seeding complete');
}

run().catch(err => {
  console.error('❌ Seeding failed');
  console.error(err);
  process.exit(1);
});
