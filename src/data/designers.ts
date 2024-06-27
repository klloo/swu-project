import { ko, Faker } from '@faker-js/faker';
import type { DesignerType } from '../types';

const faker = new Faker({ locale: ko });

const designers: DesignerType[] = Array.from({ length: 50 }, () => ({
  name: `${faker.person.lastName()}${faker.person.firstName()}`,
  email: faker.internet.email(),
  instagram: faker.internet.userName().substring(0, 10),
}));

export default designers;
