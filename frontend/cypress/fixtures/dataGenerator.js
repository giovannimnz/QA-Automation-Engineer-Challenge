import { format, getDayOfYear } from 'date-fns';
import { faker } from '@faker-js/faker';

//Generate aleatory data
export function generateRandomUserData() {

  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomEmail = faker.internet.email();
  const randomGender = Math.floor(Math.random() * 3) + 1;

  const randomPhoneNumber = Math.floor(7800000000 + Math.random() * 120000000 ).toString();

  const randomDateOfBirth = faker.date.between({ from: '1970-01-01', to: '2000-12-31', });
  const randomMonth = format(randomDateOfBirth, 'MMMM');
  const randomYear = format(randomDateOfBirth, 'yyyy');
  const randomDayOfYear = getDayOfYear(randomDateOfBirth).toString().padStart(3, '0');

  const randomSubjects = generateRandomSubjects();
  function generateRandomSubjects() {
    const availableSubjects = [1, 2, 3, 4, 5, 6, 7, 8];
    const numberOfSubjects = Math.floor(Math.random() * 2) + 2;
    return availableSubjects.sort(() => 0.5 - Math.random()).slice(0, numberOfSubjects);
  }

  const randomHobby = generateRandomHobbies();
  function generateRandomHobbies() {
    const availableHobbies = [1, 2, 3];
    const numberOfHobbies = Math.floor(Math.random() * 2) + 2;
    return availableHobbies.sort(() => 0.5 - Math.random()).slice(0, numberOfHobbies);
  }

  const randomAddress = faker.location.streetAddress(false);
  const randomState = Math.floor(Math.random() * 4);
  const randomCity = Math.floor(Math.random() * 2);

  return {
    randomFirstName,
    randomLastName,
    randomEmail,
    randomGender,
    randomPhoneNumber,
    randomDateOfBirth,
    randomMonth,
    randomYear,
    randomDayOfYear,
    randomSubjects,
    randomHobby,
    randomAddress,
    randomState,
    randomCity,
  };
}
