import { ko, Faker } from '@faker-js/faker';
import type { ProjectType } from '../types';

const faker = new Faker({ locale: ko });

const projects: ProjectType[] = Array.from({ length: 50 }, (_, idx) => ({
  id: idx,
  name: faker.lorem.sentence(),
  designers: `${faker.person.lastName()} ${faker.person.firstName()} ${faker.person.lastName()} ${faker.person.firstName()} ${faker.person.lastName()} ${faker.person.firstName()}`,
  category: faker.helpers.arrayElement([
    'Branding',
    'UX/UI',
    'Graphic',
    'Film',
  ]),
}));

export default projects;
