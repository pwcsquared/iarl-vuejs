<template>
  <div>
    <AppToolbar/>


  </div>
</template>

<script>
import AppToolbar from "@/components/layout/AppToolbar";
export default {
  name: "AppDashboard",
  components: {
    AppToolbar
  },
  updated: function() {
    if (!this.$auth.isAuthenticated()) {
      this.$router.push("/login");
    }
  }
};
</script>
