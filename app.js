window.addEventListener('load', function () {

    const inpsearch = document.querySelector('#input-search');
    const btnsearch = document.querySelector('#button-search');

    btnsearch.onclick = () => {

        // console.log(inpsearch.value);
        fetch('https://api.github.com/users/' + inpsearch.value)
            .then(data => data.json())
            .then(data => {
                const content = document.querySelector('section #content');
                const profile = data.login ? `<div class="col-4 col-lg-3 text-center">
            <img src="${data.avatar_url}" alt="" class="rounded-circle p-2 p-lg-0" width="94">
        </div>
        <div class="col-8 col-lg-9">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <h3 class="fw-bold mb-0">${data.name ? data.name : 'Not Available'}</h3>
                    <h5 class="text-primary">@${data.login}</h5>
                </div>
                <div class="col-12 col-lg-4 text-start">
                    <h5>Joined 25 Jan 2011</h5>
                </div>
            </div>
        </div>
        <div class="col-lg-3"></div>
        <div class="col">
            <p class="h5 pb-3 lh-base">${data.bio ? data.bio : 'Not Available'}
            </p>
            <div class="col-12">
                <div class="row">
                    <div class="col-12">
                        <section class="mb-3 p-3 p-lg-2 pt-lg-3 mb-lg-4 rounded bg-dark text-light text-center">
                            <div class="row">
                                <div class="col-4">
                                    <h6>Repos</h6>
                                </div>
                                <div class="col-4">
                                    <h6>Followers</h6>
                                </div>
                                <div class="col-4">
                                    <h6>Following</h6>
                                </div>
                                <div class="col-4">
                                    <h2 class="fw-bold">${data.public_repos}</h2>
                                </div>
                                <div class="col-4">
                                    <h2 class="fw-bold">${data.followers}</h2>
                                </div>
                                <div class="col-4">
                                    <h2 class="fw-bold">${data.following}</h2>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <div class="d-inline p-2">
                                <img src="assets/icon-location.svg" alt="" width="14">
                            </div>
                            <div class="d-inline p-2">${data.location ? data.location : 'Not Available'}</div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <div class="d-inline p-2">
                                <img src="assets/icon-twitter.svg" alt="" width="18">
                            </div>
                            <div class="d-inline p-2">${data.twitter_username ? '@' + data.twitter_username : 'Not Available'}</div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <div class="d-inline p-2">
                                <img src="assets/icon-website.svg" alt="" width="18">
                            </div>
                            <div class="d-inline p-2">
                                <a href="${data.html_url}">${data.html_url}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <div class="d-inline p-2">
                                <img src="assets/icon-company.svg" alt="" width="18">
                            </div>
                            <div class="d-inline p-2">
                                <a href="${data.company ? data.company : ''}">${data.company ? data.company : 'Not Available'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`: '<div class="mx-4">Not results :(</div>';
                content.innerHTML = profile;
            })
            .catch(error => {
                console.log(error);
            });
    }


});