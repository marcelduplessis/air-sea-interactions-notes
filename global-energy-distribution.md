---
layout: default
chapter: 1
title: Global Energy Distribution
---

<h1> Global Energy Distribution </h1>

*“Ocean motions result from the overall forcing of the climate system but are filtered through various processes on different scales before arriving at the motions of interest for a particular application.”* -- [[BFK18](/air-sea-interactions-notes/#BFK18)]

I quite like this quote because when we talk about scales of interest it really depends on your application. Each has their relative importance and necessity to understand and be curious about.

## Global energy budget

The Earth's atmosphere receives its heat through solar radiation, which acts primarily in the wavelength range of 0.25-4 micrometres (µm). Meanwhile, outgoing longwave radiation falls within the infrared portion of the spectrum and has typical wavelengths of 4 to 30 µm.

<div style="text-align: center;">
  <img src="assets/images/em-spectrum.png" alt="Radiation spectrum" style="width: 70%; margin: 30px 0;">
  <p><em>Radiation spectrum. Source: <a href="https://science.nasa.gov/ems/">https://science.nasa.gov/ems/</a></em></p>
</div>

Globally, over the year, the Earth system - land surfaces, oceans, and atmosphere - absorbs an average of about 239 watts of solar power per square meter (1 \\( watt\\) = 1 \\( J \\) \\( s^{-1}\\)).

Joule is a unit of energy that measures the energy required to create heat.

### What are some consequences of this energy uptake on Earth?

Fusion keeps the solar system warm, so presently the vast majority of the heating of the Earth and, thus, the motions of the atmosphere and oceans comes from the Sun’s energy. At the top of the atmosphere (~100 km above the earth’s surface), 341 \\( W \\) \\( m^{-2}\\) of solar power arrives as primarily shortwave radiation. Part of the incoming solar radiation is reflected back to space by clouds, aerosols, and the Earth's surface, which accounts for roughly just under a third (102 \\( W \\) \\( m^{-2}\\)), with about 239 \\( W \\) \\( m^{-2}\\) entering the earth’s atmosphere.

<div style="text-align: center;">
  <img src="assets/images/energy-budget.png" alt="energy budget" style="width: 70%; margin: 30px 0;">
  <p><em>Global annual mean Earth's energy budget between 2000--2004. Arrows are scaled to their relative importance. Source: <a href="/references/#TFK09">[TFK09]</a></em></p>
</div>

Yet, the Earth's energy budget involves the balance between incoming solar radiation and outgoing radiation. This balance is crucial for maintaining the climate system. So the 239 \\( W \\) \\( m^{-2}\\) is emitted as longwave radiation back to space, balancing the absorbed solar radiation. The Stefan–Boltzmann law describes the power radiated from a black body in terms of its temperature.

**The Stefan-Boltzmann law**\
\\[j^* = \sigma T^4\\]

\\(j^*\\) is the black-body radiant emittance, \\(\sigma\\) has a value of 5.670374419 \\(\times\\) \\(10^{−8}\\) \\(W \\) \\(m^{-2}\\) x \\(K^4\\), which represents the constant of proportionality between these two variables.

### Measuring Earth's brightness temperature

The brightness temperature of the Earth is measured by the Atmospheric Infrared Sounder (AIRS). Launched into Earth-orbit on May 4, 2002 aboard NASA's Aqua satellite, the AIRS provides data critical to the monitoring of Earth’s atmosphere. AIRS sees infrared wavelengths to sense the temperature of the Earth's surface or any intervening cloud. It reflects variations in the earth system’s latitude, altitude, and components (clouds, atmosphere, upper ocean, land, ice) responsible for infrared emissions. 

To see how this works on a daily bases, I show an example of how AIRS captured the infrared image below of Hurricane Helene on Friday, Sept. 27, 2024. One of the largest storms to develop in the Gulf of Mexico in the last century.

airs-infrared-hurricane

<div style="text-align: center;">
  <img src="assets/images/airs-infrared-hurricane.png" alt="AIRS-brightness-temp-hurricane" style="width: 70%; margin: 30px 0;">
  <p><em> Infrared image of Hurricane Helene September 27 after landfall. Credit: NASA/JPL-Caltech. Source: [https://airs.jpl.nasa.gov/news/287/nasas-airs-instrument-captures-hurricane-helene/](https://airs.jpl.nasa.gov/news/287/nasas-airs-instrument-captures-hurricane-helene/)</em></p>
</div>

If we average these kinds of images for long enough periods, we remove the weather component of these image and provide an image of the Earth's brightness temperature that represents climatic scale. In the image below, the average temperatures is shown for April, 2003. This image is similar to taking a photograph of the planet taken with the camera shutter held open for a month. The stationary features are captured while those obscured by moving clouds are blurred. Many continental features stand out boldly, such as our planet's vast deserts, and India, now at the end of its long, clear dry season. Also obvious are the high, cold Tibetan plateau to the north of India, and the mountains of North America. The band of yellow encircling the planet's equator is the Intertropical Convergence Zone (ITCZ), a region of persistent thunderstorms and associated high, cold clouds. The ITCZ merges with the monsoon systems of Africa and South America. Higher latitudes are increasingly obscured by clouds, though some features like the Great Lakes, the British Isles and Korea are apparent. The highest latitudes of Europe and Eurasia are completely obscured by clouds, while Antarctica stands out cold and clear at the bottom of the image. [Info source](https://airs.jpl.nasa.gov/resources/170/global-average-brightness-temperature-for-april-2003/).

<div style="text-align: center;">
  <img src="assets/images/airs-brightness-temp.jpg" alt="AIRS-brightness-temp" style="width: 100%; margin: 30px 0;">
  <p><em> Global Average Brightness Temperature for April 2003. Source: [https://airs.jpl.nasa.gov/resources/170/global-average-brightness-temperature-for-april-2003/](https://airs.jpl.nasa.gov/resources/170/global-average-brightness-temperature-for-april-2003/)</em></p>
</div>

As the Earth's brightness temperature reflects thermal radiation emitted by the Earth, we can estimate the Earth's temperature if all this heat escaped back into space. This temperature is estimated at around -18 $$\degree$$C (global average). This temperature is mainly determined by the temperature of the Earth's atmosphere, which radiates thermal energy out into space, and the Earth's surface, which absorbs solar radiation and re-radiates some of it as thermal energy.

However, as you may have guess, this is not the average temperature of Earth. In fact, Earth's average temperature is around 15 $$\degree$$C based on surface measurements from weather stations, ships, and buoys over many decades. The main reason for the difference between these two temperature measurements is the effect of the Earth's atmosphere. The Earth's atmosphere acts like a blanket, trapping some of the thermal radiation emitted by the Earth's surface and re-radiating it back towards the surface. This causes the surface temperature to be higher than the brightness temperature measured from space. 

## Greenhouse gas absorption

The absorption spectrum of greenhouse gases refers to the specific wavelengths of electromagnetic radiation that are absorbed by these gases in the Earth's atmosphere. When solar radiation passes through the atmosphere and reaches the Earth's surface, it includes a range of wavelengths, from ultraviolet to visible to infrared radiation (see above). Some of these wavelengths are absorbed by the Earth's surface and then re-emitted as longer-wavelength infrared radiation (section before this), which are absorbed by greenhouse gases in the atmosphere.

The absorption spectrum of a greenhouse gas like carbon dioxide or methane shows the specific wavelengths at which it absorbs infrared radiation. These gases have several strong absorption bands in the infrared region, which correspond to specific molecular vibrations. Carbon dioxide, for example, absorbs infrared radiation at wavelengths of around 2.7, 4.3, and 15 micrometers, while methane absorbs at around 3.3 micrometers. These absorption bands are often referred to as "windows" or "transmission bands", where the greenhouse gases allow some of the infrared radiation to pass through and escape into space.

The absorption spectrum of greenhouse gases plays a crucial role in the Earth's energy balance and climate system. By absorbing and re-emitting infrared radiation, greenhouse gases help to regulate the temperature of the Earth's atmosphere and surface. However, as the concentration of these gases increases due to human activities, the absorption of infrared radiation also increases, leading to an enhanced greenhouse effect and global warming.

<div style="text-align: center;">
  <img src="assets/images/ghg.png" alt="ghg" style="width: 70%; margin: 30px 0;">
  <p><em> Amount of energy absorbed by greenhouse gases in various wavelength regions, from ultraviolet radiation on the left, to visible light in the middle, to infrared radiation on the right. This figure was prepared by Robert A. Rohde for the Global Warming Art project.</em></p>
</div>

## An imbalance

The enhanced greenhouse effect means that global annual mean of Earth's energy budget shows a slight imbalance at the top of the atmosphere of about 0.9 \\( W \\) \\( m^{-2}\\), indicating ongoing changes in the climate system. This reflects the significant role of clouds and aerosols in reflecting and absorbing solar radiation, impacting the energy budget. 

## Summary of the Energy Flow Processes

- **Atmospheric Absorption**: Solar radiation absorbed by atmospheric components like water vapor, clouds, and aerosols.
- **Surface Absorption**: Solar radiation absorbed by the Earth's surface, contributing to heating the land and oceans.
- **Surface Emission**: The Earth's surface emits longwave radiation, which is partly absorbed by the atmosphere and partly escapes to space.
- **Back Radiation**: Longwave radiation emitted by the atmosphere back to the Earth's surface, contributing to the greenhouse effect.

## Global redistribution of energy

So far, we have only looked at a global view of things. But actually, latitude-by-latitude, the energy budget is not in balance. If like me, you've spend some time in the polar regions and the tropics, you'll have felt the difference. Equator and tropics receive excess incoming radiation over outgoing, mid-latitudes and polar latitudes emitting more energy back to space than from the sun. But the energy distribution of Earth also varies from season to season, day-to-night and longitude-by-longitude.

Consider this video of the monthly averaged net radiation, you can see the seasonal shifts in energy reaching the surface of the Earth.

<video src="assets/images/nasa-month-net-radiation.mp4" width="800" height="600" controls>
  Monthly net radiation. Source: NASA.
</video>

Another major factor infleuncing the way that heat is distribution around the global is seen in the figure below by [RALS17]. Why do we see the large differences in temperature between the Earth's surface and air just above it? Why are these larger over land compared to the ocean?

<div style="text-align: center;">
  <img src="assets/images/diurnal-temp-range.png" alt="heat-range" style="width: 60%; margin: 30px 0;">
  <p><em>The difference between the skin temperature and the surface air temperature retrieved from AIRS measurements. The maximum differences are seen over land, for example, in Africa and Australia. Source: [RALS17]</em></p>
</div>

This has got to do with specific heat capacity of dry air being \\( 1000 \\) \\(J \\) \\( kg^{-1} \\) \\( K^{-1} \\), and seawater \\( 4000 \\) \\(J \\) \\( kg^{-1} \\) \\( K^{-1} \\). For equal parts ocean and air, the ocean is able to hold about 4 times more heat than the air before warming to the same temperature, meaning the ocean will take considerably longer to warm given the same heat applied. In fact, the atmosphere has a total heat capacity near 107 \\(J \\) \\( m^{-2} \\) \\( K^{-1} \\), equal to about 3 meters of seawater. 

As a case study, if we applied 100 \\(W \\) \\( m^{-2} \\) heating to the atmosphere for one day, it would warm at about 1 \\(K \\). On the otherhand, the ocean with a mixed layer of 30 meters would only warm by about 0.1 \\(K \\).

The global energy distribution has important implications for setting large temperature differences between the equator and polar regions, which are important for wind generation and ocean currents. Winds and ocean currents play a major role in moving the surplus heat from the equatorial regions to the polar regions. Without this heat transfer, the polar regions of Earth would get colder every year and regions between ~ 35 \\( \degree \\)N and 35 \\( \degree \\)S would get warmer every year. If the whole system is to be in balance, there must be an exchange of energy between the excessive regions toward the deficient ones. There are three primary mechanisms that account for about 5.7 PW of poleward energy transport in each hemisphere. 

<div style="text-align: center;">
  <img src="assets/images/heat-redist.png" alt="heat-redis" style="width: 60%; margin: 30px 0;">
  <p><em> Global heat redistribution. Source: NASA.</em></p>
</div>

#### 1. Atmospheric sensible heat transport (3PW)

- Hadley Cells ascend near the equator, move poleward where they descend and return back toward the equator.
- Conversion of thermal energy to mechanical energy that drives the Hadley cell, much like a Carnot cycle (Pauluis, 2011). 
- These cells do not move directly from equator to pole, but are veered by the Coriolis force, so they have dominantly zonal winds at the surface. E.g. equatorial easterlies and mid-latitude westerlies.

{% include youtube.html id="mKcU-hIoPf4" %}

### 2. Ocean sensible heat transport (2 PW)

- Warm seawater moves poleward, and colder seawater moves equatorward.
- Unlike the atmosphere, oceans are heated and cooled at the surface, so they are not like heat engines. Instead, it must come from other sources, e.g., winds and tides.
- Meridional heat transport is poleward when zonally averaged, but the Atlantic is northward at all latitudes, and the Indian Ocean is southward at all latitudes.
- Wind-driven circulation and thermohaline circulation are not distinct. We will begin to disentangle this in this course.

{% include youtube.html id="CCmTY0PKGDs" %}

#### 3. Ocean latent heat transport (1 PW)

- Atmosphere/ocean latent heat transport is moist air moving poleward and dry air and liquid water in oceans and rivers moving equatorward.
- Vaporization releases heat that is transported from the location where evaporates to where the precipitation occurs - this is known as the  “steam cycle”.
- Moist air carries a lot of heat as it takes 560 times as much energy to evaporate water as to warm it by 1 degree. 
- Thus, although the hydrological cycle transports only a small mass of water it carries a lot of heat.

## Ocean heat content

Heat redistribution allows for the ocean to continuously absorb atmospheric heat


## General readings for this section

- [[BFK18](/air-sea-interactions-notes/#BFK18)]
- [[TFK09](/air-sea-interactions-notes/#TFK09)]
