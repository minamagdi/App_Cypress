class Search {
    // page elements
    searchTextBox() {
       return cy.get('[id="APjFqb"]');
    }


    // page actions

    TypeOnSearchTextBox(keyword) {
        this.searchTextBox().type(keyword);
    }

    // page assertion
}
export const searchPage = new Search();