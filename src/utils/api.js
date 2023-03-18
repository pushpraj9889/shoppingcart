import axios from 'axios';

export default function getApi(success, failure) {
  const options = {
    params: {
      user_profile: 500,
    },
    headers: {
      Authorization: 'c3fb04334a7c647338cdfd500e2997bb9898cf52',
    },
  };

  axios
    .get(
      'http://api.reward-dragon.com:8000/customers/customer-josh-reason-today/?user_profile=500',
      options,
    )
    .then(response => {
      console.log('res', response);
      success(response.data.moodalytics);
    })
    .catch(error => {
      failure(error);
    });
}
