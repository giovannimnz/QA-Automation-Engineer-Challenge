const recordButton = null

class WebtablesElements{

    webtablesButton = () => ':nth-child(1) > .element-list > .menu-list > #item-3'
    addNewRecordButton = () => '#addNewRecordButton'
    editRecordButton = (recordNumber) => `#edit-record-${recordNumber}`;
    deleteRecordButton = (recordNumber) => `#delete-record-${recordNumber}`
    inputAge = () => '#age'
    inputDepartment = () => '#department'
    inputSalary = () => '#salary'

    getLastRecordNumber() {
        return cy.get('[id^="edit-record-"]').then($records => {
            const recordIds = $records.map((index, el) => {
                return parseInt(el.id.replace('edit-record-', ''));
            }).get();
            return Math.max(...recordIds);
        });
    }

}

export default WebtablesElements;