import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import Chart, {ArgumentAxis, Series, Legend, Tooltip} from 'devextreme-react/chart';

const data = [
  {arg: 1990, val: 100,},
  {arg: 2000, val: 110,},
  {arg: 2010, val: 130,}
];

const DevexTest = () => {
  //console.log('Hello world!');

  return (
	<>
		<h2 className="mt-3">График</h2>
		<div className="chart1">
			<Chart dataSource={data}>
			<ArgumentAxis tickInterval={10} />
			<Series type="bar" />
			<Legend visible={false} />
			<Tooltip enabled={true} format="thousands" /> {/* пока везде ОК */}
			</Chart>
		</div>
	</>
  );
}

export default DevexTest;
