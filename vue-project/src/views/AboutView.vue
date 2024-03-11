<template>
    <br>
<div class="about-page">
    <h1>Project Description</h1>
    <p>The customer wants a website that gives a list of hard drinks and instructions on how to make said hard drinks given a list of alcohols, soft drinks, and juices they provide. The website should be highly convenient and easily understandable with a logical flow, including ways to accommodate both single-use users and frequent users, allowing it to be used by all but faster for frequent users who have their preferences/allergies and common ingredients saved. If possible the website should accommodate other prepped drinks such as coffees, energy drinks, and smoothies.
</p>
    <br>
    <h1>About Us</h1>
    <div v-for="member in teamMembers" :key="member.id" class="team-member">
      <img :src="member.image" :alt="member.name" class="member-image" />
      <div class="member-details">
        <h2>{{ member.name }}</h2>
        <p>{{ member.role }}</p>
        <p class="member-description">{{ member.description }}</p>
      </div>
    </div>
  </div>
  <br>
    <div>
<FooterFile></FooterFile>
    </div>
</template>

<script>
import FooterFile from '../components/FooterFile.vue'; 
export default {
    components: {
            FooterFile
        },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "Michael Moran",
          role: "Back End",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "/src/pics/Michael_Moran.jpg",
        },
        {
          id: 2,
          name: "Evan Bartels",
          role: "Back End",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "/src/pics/Evan_Bartels.jpg", 
        },
        {
          id: 3,
          name: "Travis Ho",
          role: "Front End",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "/src/pics/Travis_Ho.jpg", 
        },
        {
          id: 4,
          name: "Carter Hosking",
          role: "Front End",
          description: "Why did I want to work on this project? My specialties include Jaeger Bombs, icing my roomates, and becoming the bartenders favorite.",
          image: "/src/pics/Carter_Hosking.jpeg", 
        },
       
      ],
    };
  },
};


</script>

<style scoped>
.about-page {
  text-align: center;
  margin: 20px;
}

.team-member {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.member-header {
  text-align: center;
}

.member-image {
  width: 100px; /* Adjust the size as needed */
  height: 100px; /* Adjust the size as needed */
  border-radius: 50%;
  margin-right: 20px;
}

.member-details {
  text-align: left;
}

.member-description {
  margin-top: 10px;
}

</style>