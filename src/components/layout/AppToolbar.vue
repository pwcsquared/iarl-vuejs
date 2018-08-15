<template>
  <div>
    <v-toolbar 
      dark 
      color="primary">
      <v-toolbar-title class="white--text">IARL</v-toolbar-title>
      <v-spacer/>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>arrow_upward</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>arrow_downward</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>trip_origin</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-text-field
        hide-details 
        single-line
        append-icon="search"
        placeholder="Search a file, folder or a meaning for your life"
        clearable
      />
    </v-toolbar>

    <v-system-bar
      height="50">

      <v-breadcrumbs divider="-">
        <v-breadcrumbs-item
          v-for="item in items"
          :key="item.text"
          :disabled="item.disabled"
        >
          {{ item.text }}
        </v-breadcrumbs-item>
      </v-breadcrumbs>

    </v-system-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false
        },
        {
          text: "Documents",
          disabled: false
        },
        {
          text: "Guardians Scripts",
          disabled: true
        }
      ]
    };
  }
};
</script>
