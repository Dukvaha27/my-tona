import { makeAutoObservable } from "mobx";

class CountriesApi {
  countries: string[] = [];
  error = null;
  loading = false;
  country = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCountries() {
    fetch(
      "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata"
    )
      .then((response) => {
        this.loading = true;
        return response.json();
      })
      .then((data) => {
        this.countries = data.countries;
        this.loading = false;
      })
      .catch((error) => {
        this.error = error;
      });
  }

  getDataByCountry(country: string) {
    fetch(
      `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?country=${country}&hide_fields=combined_name,country_iso3,loc,population,uid,_id,country_code, country_iso2`
    )
      .then((res) => res.json())
      .then((data) => {
        this.country = data;
      });
  }
}

export default new CountriesApi();
