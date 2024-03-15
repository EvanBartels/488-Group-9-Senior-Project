<template>
    <br>
<div class="about-page">
  <h3 class="text-h2" style="text-align: center; font-family: sans-serif; font-weight: lighter;">Project Description</h3>
  <br>
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
          description: "I became interested in working on this project to further develop my web development skills as I am pursuing a minor in Web Application Development. This project seemed like a great opportunity to dive into technologies I was somewhat familiar with. I wanted to become confident in my skills to deal with frontend frameworks like Vue, backend tools with ASP.NET, cloud services like Azure, and putting them all together into one project.",
          image: "/src/pics/Michael_Moran.jpg",
        },
        {
          id: 2,
          name: "Evan Bartels",
          role: "Back End",
          description: "I came up with the idea of a drink reccomendation system after seeing my mother work and run her own bar back in my home town. I figured this would be a good way to help people learn how to make drinkes, whether it's at home or as a bartending training tool. I also thought that it would be a good opportunity for me to develop and work on a website with a group, and learn about both front end tools such as Vue, and backend tools such as Microsoft Azure",
          image: "/src/pics/Evan_Bartels.jpg", 
        },
        {
          id: 3,
          name: "Travis Ho",
          role: "Front End",
          description: "The reason why I wanted to work on this drink website is because I have never made a website that is based on users consumptions and thought this would be a great opportunity to do it.",
          image: "/src/pics/Travis_Ho.jpg", 
        },
        {
          id: 4,
          name: "Carter Hosking",
          role: "Front End",
          description: "Why did I want to work on this project? I wanted to show my creativity on designing front end components and felt this was a fun topic considering I drink different coffee drinks and alcoholic drinks all the time.",
          image: "/src/pics/cart1.jpg", 
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