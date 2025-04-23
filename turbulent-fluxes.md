---
layout: default
chapter: 3
title: Turbulent Heat Fluxes
---

<h1> Turbulent fluxes </h1>

There are two key approaches to quantify air-sea exchanges: the **eddy covariance method** and the **bulk flux method**.

<h2>Eddy Covariance</h2>

The eddy covariance method is a direct measurement technique used to estimate fluxes of momentum, heat, and gases at the air-sea interface. It relies on high-frequency measurements of wind velocity, temperature, and scalar quantities like humidity or \\( CO_2 \\) concentration.

<h3>Key Features:</h3>

- **Direct Measurement**: Captures turbulent fluxes by resolving small-scale atmospheric eddies.
- **High Temporal Resolution**: Requires fast-response sensors (e.g., sonic anemometers, infrared gas analyzers).
- **Complexity**: Sensitive to sensor alignment, platform motion (e.g., ship or buoy), and environmental noise.

<h3>Governing Equation:</h3>

If we are interested in a quantity \\( q \\), it can be separated into its mean and fluctating parts:

\\[ q = \overline{q} - q' \\]

\\( \overline{q} \\) is the mean component, while \\( q' \\) is the flucutating term.

The flux of the scalar quantity $q$ is given by:

\\[ F = \overline{w'q'} \\]

- \\( w' \\): Vertical velocity fluctuation
- \\( q' \\): Scalar quantity fluctuation (e.g., temperature, humidity)
- \\( \overline{w'q'} \\): Time-averaged covariance of \\( w' \\) and \\( q' \\)

<div style="text-align: center;">
  <img src="assets/images/eddy-cov-schematic.jpg" alt="eddy covariance schematic" style="width: 80%; margin: 30px 0;">
  <p><em>Schematic of the transport of a quantity c by turbulent motion. Source: Source: <a href="/references/#BA10">[BA10]</a></em></p>
</div>

<h3>Advantages:</h3>

- Provides high accuracy for turbulent fluxes.
- Useful for research-grade measurements.

<h3>Limitations:</h3>

- Requires expensive instrumentation.
- Challenging to deploy in harsh marine environments.

---

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