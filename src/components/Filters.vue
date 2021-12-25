<template>
  <div class="Filters">
    <div class="filters text-right mt-5">
      <!-- Search By Title -->
      <v-hover>
        <v-menu :close-on-content-click="closeSearchMenuOnContentClick" :nudge-width="200" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="primary large mr-5" justify="end" v-bind="attrs" v-on="on" @click="closeSearchMenuOnContentClick = false">
              <v-icon left>fas fa-search</v-icon>
              <span>Search</span>
            </v-btn>
          </template>

          <!-- <v-card> -->
          <v-list class="text-center">
            <v-list-item class="mt-3">
              <v-text-field label="Search" hide-details="auto" class="search mb-5 mx-auto" v-model="searchTitle"></v-text-field>
            </v-list-item>

            <v-list-item>
              <v-btn class="primary text-capitalize" @click="search">
                Search
                <v-icon right>fas fa-search</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
          <!-- </v-card> -->
        </v-menu>
      </v-hover>

      <!-- Search By Filter -->
      <v-menu class="mr-5" :close-on-content-click="closeSearchMenuOnContentClick" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="primary large mr-5" justify="end" v-bind="attrs" v-on="on" @click="closeSearchMenuOnContentClick = false">
            <v-icon left>fas fa-filter</v-icon>
            <span>Filter</span>
          </v-btn>
        </template>

        <v-card>
          <v-list class="text-center">
            <v-list-item class="mt-3">
              <v-select :items="items" label="Select Type" solo v-model="filterCategory"></v-select>
            </v-list-item>

            <v-list-item>
              <v-btn class="primary text-capitalize" @click="filter">
                Filter
                <v-icon right>fas fa-filter</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-btn class="primary text-capitalize mr-5" @click="sortBy('title')">
        Sort
        <v-icon right>fas fa-sort</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["books"],
  data() {
    return {
      searchTitle: "",
      filterCategory: "",
      sortValue: "false",
      localFilter: {},
      closeSearchMenuOnContentClick: false,
      items: ["None", "Horror", "Thriller"],
    };
  },
  methods: {
    search() {
      this.closeSearchMenuOnContentClick = true;
      this.localFilter = {};
      console.log(this.books);

      if (this.searchTitle == "") {
        this.localFilter = { ...this.books };
      } else {
        Object.keys(this.books).forEach((booksCategory) => {
          this.localFilter[booksCategory] = [];
          this.books[booksCategory].forEach((book) => {
            // console.log("localfilter", JSON.parse(JSON.stringify(this.localFilter)));
            // console.log("books", JSON.parse(JSON.stringify(book)));
            if (book.title.toLowerCase().includes(this.searchTitle.toLowerCase())) {
              this.localFilter[booksCategory].push(book);
            }
          });
        });
      }

      console.log("localFilter", JSON.parse(JSON.stringify(this.localFilter)));
      this.$emit("updateFilter", this.localFilter);
      this.searchTitle = "";
    },

    filter() {
      this.closeSearchMenuOnContentClick = true;
      this.localFilter = {};
      if (this.filterCategory == "None" || this.filterCategory == "") {
        this.localFilter = { ...this.books };
      }
      console.log("filterCat", this.filterCategory);
      Object.keys(this.books).forEach((booksCategory) => {
        if (booksCategory == this.filterCategory) {
          this.localFilter[booksCategory] = [];
          this.books[booksCategory].forEach((books) => {
            this.localFilter[booksCategory].push(books);
          });
        }
      });
      // console.log("localfil", JSON.parse(JSON.stringify(this.localFilter)));
      this.$emit("updateFilter", this.localFilter);
      this.filterCategory = "";
    },

    sortBy(property) {
      // console.log("sort...");
      if (this.sortValue == "false") {
        // Assignment without Reference
        this.localFilter = JSON.parse(JSON.stringify(this.books));
        Object.keys(this.books).forEach((booksCategory) => {
          this.localFilter[booksCategory].sort((a, b) => (a[property] < b[property] ? -1 : 1));
        });
        this.sortValue = "true";
        this.$emit("updateFilter", this.localFilter);
      } else {
        this.localFilter = { ...this.books };
        this.sortValue = "false";
        this.$emit("updateFilter", this.localFilter);
      }
    },
  },
};
</script>

<style></style>
