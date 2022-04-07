<template>
<div>
 <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
  <ShareNetwork
    v-for="network in networks"
    :network="network.network"
    :key="network.network"
   
    :url="sharing.url"
    :title="sharing.title"
    :description="sharing.description"
    :quote="sharing.quote"
    :hashtags="sharing.hashtags"
    :twitterUser="sharing.twitterUser"
  >
  
  <div class="social-data" :style="{backgroundColor: network.color}" >
     <i :class="network.icon"></i>
    <span>{{ network.name }}</span>
  </div>
   
  </ShareNetwork>
</div>
</template>

<script>
export default {
  data () {
    return {
      sharing: {
        url: 'https://news.vuejs.org/issues/180',
        title: 'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
        description: 'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
        quote: 'The hot reload is so fast it\'s near instant. - Evan You',
        hashtags: 'vuejs,vite,javascript',
        twitterUser: 'youyuxi'
      },
      networks: [
     
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' },
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' },
        { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' }

      ]
    }
  }
}
</script>
<style scoped>
a:link {
  text-decoration: none;
  color: white;
}
.social-data{
  display: inline-block;
  height: 30px;
  width: 100px;
  margin: 10px;
}
</style>