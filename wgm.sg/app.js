// TBD
// - center table
// - add filter
// - add sorting
// no paging ?

export default {
  template: /*html*/`
    <div class="container">
      <div class="table-container" style="height:80vh;overflow-y:auto;">
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th class="sticky-th"><abbr title="Game">Game</abbr></th>
              <th class="sticky-th"><abbr title="Publisher">Publisher</abbr></th>
              <th class="sticky-th"><abbr title="Post">Post</abbr></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in posts">
              <td>{{post.title}}</td>
              <td>{{post.pub}}</td>
              <td><a :href="'https://www.facebook.com/wargames.singapore/posts/' + post.post" target="_blank">{{ post.post }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    try {
      const res = await fetch('data.json')
      this.posts = await res.json()
      // console.log(this.posts)
    } catch (e) {
    }
  }
}