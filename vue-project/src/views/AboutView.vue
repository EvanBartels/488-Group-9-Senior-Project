<template>
    <br>
    <!--
    <div>
        <h1 class="text-h2" style="text-align: center; color: #0F4C75; font-family: sans-serif; font-weight: lighter;">About</h1>
    </div>
    <div>
    <p class="d-flex align-center justify-center">
        This is our web application for Senior Capstone.
    </p>
    <p class="d-flex align-center justify-center">
        This app is designed for a user to be given cocktail recipes based on the ingredients they have on hand.
    </p>
    <p class="d-flex align-center justify-center">
        The user will be able to create an account and save their favorite drinks and preferences while
        also being able to submit their own.
    </p>
</div>
<div>
    <h1 class="text-h2" style="text-align: center; color: #0F4C75; font-family: sans-serif; font-weight: lighter;">
        Team Members
    </h1>
    <div class="d-flex align-center justify-center">
        <ul>
            <li>Evan Bartels</li>
            <li>Michael Moran</li>
            <li>Travis Ho</li>
            <li>Carter Hosking</li>
        </ul>
    </div>
    
</div>
<div>
     
        Will add site instructions here most likely
    

</div>
-->
<div class="about-page">
    <h1>Project Goal</h1>
    <p></p>
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
          image: "../pics/Michael_Moran.jpg",
          //socials: "https://github.com",
        },
        {
          id: 2,
          name: "Evan Bartels",
          role: "Back End",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "../pics/Evan_Bartels.jpg",
          //socials: "https://github.com",
        },
        {
          id: 3,
          name: "Travis Ho",
          role: "Front End",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: "../pics/Travis_Ho.jpg", 
          socials: "https://github.com/TravisHo9",
        },
        {
          id: 4,
          name: "Carter Hosking",
          role: "Front End",
          description: "Why did I want to work on this project? My specialties include Jaeger Bombs, icing my roomates, and becoming the bartenders favorite.",
          image: "../pics/Carter_Hosking.jpeg", 
          //socials: "https://github.com",
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