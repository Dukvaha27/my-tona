import React, {FC, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import countriesApi from "../../store/countriesApi";
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";



const Country: FC = observer(() => {
  const [state, setState] = useState('deaths')
  const { country = [] } = countriesApi;
  const { name = "" } = useParams();

  useEffect(() => {
    countriesApi.getDataByCountry(name);
  }, []);


  const options = {
    title: {
      text: `Графика статистики по заболеваниям covid-19 в ${name}`
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%Y-%m-%d}',
      }
    },
    series: [{
      //   @ts-ignore
      data: country.map((el) => [new Date(el.date).getTime(), el[state]])
    }]
  }
  return (
      <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        <div className={'container'}>
          <select className="form-select" aria-label="Default select example" onChange={({target}) => setState(target.value)}>
            <option value="deaths">Летальные исходы</option>
            <option value="recovered">Выздоровело</option>
            <option value="confirmed">Подтверждено</option>
            <option value="confirmed_daily">подтверждаются ежедневно</option>
            <option value="deaths_daily">смертей ежедневно</option>
            <option value="recovered_daily">восстанавливаются ежедневно</option>
          </select>
        </div>
      </div>
  );
});

export default Country;
