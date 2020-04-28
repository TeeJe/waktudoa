# waktudoa
waktudoa is a MM Module, that calculates the prayer times for any location around the world, based on a calculation methods currently used in Muslim communities developed by PrayTimes.org.

The mathematical side of how the calculation should work is generally agreed upon in the Islamic world and accepted as is.
The User's Manual can be found:
http://praytimes.org/manual
And the Calculation Formulas at:
http://praytimes.org/calculation

A calculation method is in general for praying times as follows:

- The Fajr Angle
- The Maghrib Angle or minutes after sunset that Maghrib should be
- The Isha Angle or minutes after Maghrib that Isha should be

Most countries adhere to one of the above methods, and then tune the timings further, sometime to reflect some countries their own calculations, the module has an option by adding a few minutes correction in the configuration.

![Screenshot](screenshot.png)

## Installation
Clone this repository in your modules folder, and install dependencies:

```
cd ~/MagicMirror/modules
git clone https://github.com/TeeJe/waktudoa.git
cd waktudoa
npm install
```

## Configuration
Go to the MagicMirror/config directory and edit the config.js file.
Add the module to your modules array in your config.js.

```
{
        module: "waktudoa",
        position: "middle_center",
        config: {
          lati: -6.3,
          long: 106.7,
          elev: 55,
     timeZones: 7,
            list: ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"],
            countdown:0,
            afterAlarmCount:180, //60 for 1 minutes showing shalat
            iqomahcount:540, //600 for 10 minutes waiting iqomah
            hidden:false,
            timerState:false,
            iqomahState:false,
            alarmtext:'',
             Tfajr:-7,
          Tsunrise:-0,
            Tdhuhr:+2,
              Tasr:+1,
          Tmaghrib:+3,
            Tisha:+7,
       CalcMethods: 'MWL',
                }
},
```
To get your latitude and longitude, you can go to https://latitudelongitude.org

## Module configuration
Here is the documentation of options for the modules configuration:

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>lati</code></td>
      <td>The latitude of your location for a correct calculation<br /><br /><strong>Number</strong><br />Default: <code>null</code></td>
    </tr>
    <tr>
      <td><code>long</code></td>
      <td>The longitude of your location for a correct calculation<br /><br /><strong>Number</strong><br />Default: <code>null</code></td>
    </tr>
    <tr>
      <td><code>elev</code></td>
      <td>The elevation of the place <br /><br /><strong>Number</strong><br />Default: <code>null</code></td>
    </tr>
    <tr>
    <td><code>timeZones</code></td>
    <td>Hours of the Timezone<br /><br /><strong>True / False</strong><br />Default: <code>null</code></td>
  </tr>       
    <tr>
      <td><code>CalcMethods</code></td>
      <td>Kind of calculation method to use<br /><br /><strong>Default: </strong>Number<br /></strong>Possible values:
	  <li>0 - MWL : Muslim World League</li>
	  <li>1 - ISNA: Islamic Society of North America</li>
	  <li>2 - Egypt: Egyptian General Authority of Survey</li>
	  <li>3 - Makkah: Umm Al-Qura University, Makkah</li>
	  <li>4 - Umm Al-Qura University, Makkah</li>
	  <li>5 - Karachi: University of Islamic Sciences, Karachi</li>
	  <li>7 - Tehran: Institute of Geophysics, University of Tehran</li>
	  <li>8 - Custom. See http://praytimes.org/manual</li>
	</strong></td>
    </tr>
    <tr>
      <td><code>Tfajr</code></td>
	<td>Time corrections of Fafjr for your location <strong>(in minutes)</strong><br /><br /><br />Default: <code>null</code></td>
    </tr>
    <tr>
      <td><code>Tsunrise</code></td>
      <td>Time corrections of Sunrise/Syuruq for your location <br /><br /><strong>True / False</strong><br />Default: <code>null</code></td>
    </tr>
     <tr>
      <td><code>Tdhuhr</code></td>
      <td>Time corrections of Dzhuhur for your location<br /><br /><strong>True / False</strong><br />Default: <code>null</code></td>
    </tr>
    <tr>
      <td><code>Tasr</code></td>
      <td>Time corrections of Ashr for your location<br /><br /><strong>True / False</strong><br />Default: <code>null</code></td>
    </tr>
    <tr>
      <td><code>Tmaghrib</code></td>
      <td>Time corrections of Maghrib for your location<br /><br /><strong>True / False</strong><br />Default: <code>nukk</code></td>
    </tr>  
    <tr>      
      <td><code>Tisha</code></td>
      <td>Time corrections of Isha for your location<br /><br /><strong>True / False</strong><br />Default: <code>null</code></td>
    </tr>
    <tr>     
      <td><code>afterAlarmCount</code></td>
      <td>Countdown time in minutes after Shalat Time, used for Adzan time<br /><br /><strong>True / False</strong><br />Default: <code>null</code></td>
    </tr>          
    <tr>
      <td><code>iqomahcount</code></td>
      <td>Countdown time in minutes for Iqomah Time<br /><br /><strong>True / False</strong><br />Default: <code>null</code></td>
    </tr>
    <tr>

</tbody>
</table>

## Language support
The waktudoa module currently not support different languages.

## License
### The MIT License (MIT)

Copyright © 2020 Tjetjep Rustandi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
