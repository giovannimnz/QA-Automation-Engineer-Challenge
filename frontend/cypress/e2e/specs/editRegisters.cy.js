import WebtablesPage from "../pages/webtablesPage";

const webtablesPage = new WebtablesPage();

import { generateRandomUserData } from '../../fixtures/dataGenerator';

describe ('Open webtables', () => {
    it ('Edit registers', () => {

        webtablesPage.index();
        webtablesPage.indexElements();
        webtablesPage.openWebtablesButton();

        let userData = generateRandomUserData();
        webtablesPage.addNewRegister(
            userData.randomFirstName,
            userData.randomLastName,
            userData.randomEmail,
            userData.randomAge,
            userData.randomSalary,
            userData.randomDepartment
        );

        userData = generateRandomUserData();
        webtablesPage.editNewRegister(
            userData.randomFirstName,
            userData.randomLastName,
            userData.randomEmail,
            userData.randomAge,
            userData.randomSalary,
            userData.randomDepartment
        );

        webtablesPage.removeRegister();

        for (let i = 0; i < 12; i++) {
            userData = generateRandomUserData();
            webtablesPage.addNewRegister(
                userData.randomFirstName,
                userData.randomLastName,
                userData.randomEmail,
                userData.randomAge,
                userData.randomSalary,
                userData.randomDepartment
            );
        }

        for (let i = 0; i < 12; i++) {
            webtablesPage.removeRegister()

        }
    });
});
