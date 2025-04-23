---
layout: default
chapter: 3
title: Turbulent Heat Fluxes
---

<h1> Turbulent fluxes </h1>

There are two key approaches to quantify air-sea exchanges: the **eddy covariance method** and the **bulk flux method**. In this section, we outline the main components of each and how to observe them. At the end, you should be able to:

- Compare and constrast the eddy covariance and bulk flux method for obtaining air-sea heat fluxes
- Discuss the advantages and disadvantages of the two methods
- Outline the main instrumentation required to obtain each estimation of the flux

<h2>Eddy Covariance</h2>

The eddy covariance method is a direct measurement technique used to estimate fluxes of momentum, heat, and gases at the air-sea interface. The transfer of heat, moisture, and other scalars between the atmosphere and the surface is mediated by turbulent eddies. It therefore relies on measurements of wind velocity, temperature, and scalar quantities like humidity or \\( CO_2 \\) concentration at scales much faster than the time evolution of eddies in the marine atmospheric boundary layer.

<h3>Governing Equation:</h3>

If we are interested in a quantity \\( c \\), it can be separated into its mean and fluctating parts:

\\[ q = \overline{c} - c' \\]

\\( \overline{c} \\) is the mean component, while \\( c' \\) is the flucutating term.

The flux of the scalar quantity \\( c \\) is given by:

\\[ F = \overline{w'c'} \\]

- \\( w' \\): Vertical wind speed fluctuation
- \\( c' \\): Scalar quantity fluctuation (e.g., temperature, humidity)
- \\( \overline{w'c'} \\): Time-averaged covariance of \\( w' \\) and \\( c' \\)

<div style="text-align: center;">
  <img src="assets/images/eddy-cov-schematic.jpg" alt="eddy covariance schematic" style="width: 80%; margin: 30px 0;">
  <p><em>Schematic of the transport of a quantity c by turbulent motion. Source: Source: <a href="/references/#BA10">[BA10]</a></em></p>
</div>

If we imagine a simultaneous measurement the water vapour concentration \\( q \\) (\\( \mu mol \\) \\( mol^{-1} \\)) and vertical wind speed \\( w \\) of a large number of \\( N \\) air volumes at the same height above the surface, the vertical flux of the water flux (i.e. latent heat flux) is given by the average over all measurements. The simultaneous measurement at \\( N \\) locations \\( p_j \\) is not very feasible. However, under the assumption of homogeneity in space and time, multiple measurements at the same point will lead to the same result. This is called Taylor "frozen turbulence" hypothesis.

This youtube video by NCAR VAPOR demonstrates how winds, convection, and surface waves combine in complex ways to drive momentum and scalar transport in the marine atmospheric boundary layer. You can clearly visualise the turbulent eddies in the marine atmospheric boundary layer.

{% include youtube.html id="e5DO-gq-5XE" %}

<h3>Observational methods:</h3>

There are several ways to obtain eddy covariance measurements at sea. The most common is using ship-based observations, while others include moored buoys, drifting spar buoys, and autonomous vehicles. Each come with their own set of complications.

**Ship-based eddy covariance flux measurements**:

Ship-based eddy covariance instruments should be installed to minimise the effect of flow distortion. The flux instrumentation is usually mounted on an arm pointing out from a bow mast or boom and flux measurements are restricted to a wind sector where minimal flow distortion effects are expected, (i.e., when the ship is pointed into the wind field.)

<div style="text-align: center;">
  <img src="assets/images/eddy-cov-ship.jpg" alt="eddy covariance ship" style="width: 80%; margin: 30px 0;">
  <p><em>Image of an eddy covariance setup on the Celtic Explorer. Source: Dr. Brian Ward</a></em></p>
</div>

<h3>Motion correction:</h3>

<h3>Key Features:</h3>

- **Direct Measurement**: Captures turbulent fluxes by resolving small-scale atmospheric eddies.
- **High Temporal Resolution**: Requires fast-response sensors (e.g., sonic anemometers, infrared gas analyzers).
- **Complexity**: Sensitive to sensor alignment, platform motion (e.g., ship or buoy), and environmental noise.

<h3>Advantages:</h3>

- Provides high accuracy for turbulent fluxes.
- Useful for research-grade measurements.

<h3>Limitations:</h3>

- Requires expensive instrumentation.
- Challenging to deploy in harsh marine environments.

The exchange of momentum and energy between the atmosphere and ocean is difficult to measure directly over the ocean. Instead, oceanographers and meteorologist often rely on bulk formula that relates the fluxes to more easily measured averaged wind speed, temperature and humidity.

<h2>Bulk Flux Method</h2>

The bulk flux method is an indirect approach that estimates air-sea fluxes using empirical parameterizations based on mean meteorological and oceanographic variables.

<h3>Key Features:</h3>
- **Parameterization-Based**: Relies on bulk formulas derived from observational data.
- **Widely Used**: Suitable for operational models and large-scale studies.
- **Simpler Setup**: Requires standard meteorological measurements (e.g., wind speed, air temperature, sea surface temperature).

<h3>Bulk Flux Formulas:</h3>
1. **Momentum Flux (Wind Stress)**:
    \[
    \tau = \rho_a C_d U^2
    \]
    Where:
    - \( \tau \): Wind stress
    - \( \rho_a \): Air density
    - \( C_d \): Drag coefficient
    - \( U \): Wind speed at a reference height

2. **Sensible Heat Flux**:
    \[
    Q_H = \rho_a C_p C_H U (T_s - T_a)
    \]
    Where:
    - \( Q_H \): Sensible heat flux
    - \( C_p \): Specific heat capacity of air
    - \( C_H \): Sensible heat transfer coefficient
    - \( T_s, T_a \): Sea surface and air temperatures

3. **Latent Heat Flux**:
    \[
    Q_E = \rho_a L_v C_E U (q_s - q_a)
    \]
    Where:
    - \( Q_E \): Latent heat flux
    - \( L_v \): Latent heat of vaporization
    - \( C_E \): Latent heat transfer coefficient
    - \( q_s, q_a \): Specific humidity at the surface and air

<h3>Advantages:</h3>
- Computationally efficient.
- Applicable over large spatial and temporal scales.

<h3>Limitations:</h3>
- Accuracy depends on the quality of parameterizations.
- Assumes steady-state and horizontally homogeneous conditions.

<h2>Comparison of Methods</h2>

| Feature                | Eddy Covariance         | Bulk Flux              |
|------------------------|-------------------------|------------------------|
| **Measurement Type**   | Direct                 | Indirect               |
| **Complexity**         | High                   | Moderate               |
| **Accuracy**           | High (turbulent fluxes)| Moderate               |
| **Deployment**         | Research-grade         | Operational            |


Understanding air-sea interactions through these methods provides critical insights into processes like ocean-atmosphere coupling, climate variability, and energy transfer in the Earth system.