class Github {
    constructor() {
        this.client_id = 'eac27b60f8b966dc1923';
        this.client_secret = 'b00c416b9a4e19724dedc6175992e3bc21b3b738';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
         client_id = ${this.client_id}& client_secret = 
         ${this.client_secret}`);

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }
    }
}