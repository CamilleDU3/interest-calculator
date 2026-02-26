# Backlog – Investment Simulator

## UC0 – Global Settings / UI Preferences [CROSS-CUTTING]
- **US1** – Toggle Dark / Light Mode
- **US2** – Detect system theme preference automatically
- **US3** – Persist theme preference in localStorage or user account
- **US4** – Select application language
- **US5** – Persist language preference in localStorage or user account
- **US6** – Localize dates, numbers, charts, and tooltips according to selected language

## UC1 – Fixed ROI [MVP]
- **US1** – Calculate ROI from initial amount, monthly/annual ROI, and contributions
- **US2** – Display investment evolution graph
- **US3** – Show evolution by month and year
- **US4** – Apply fixed inflation

## UC2 – Variable ROI / ETF [MVP]
- **US1** – Add example ETF (MSCI World or S&P500) to simulation
- **US2** – Import monthly ROI data via copy-paste with delimiter selection
- **US3** – Choose investment start month and year

## UC3 – Experience Mode [MVP]
- **US1** – Play mode: view month-by-month evolution with pause, reset and speed adjustement
- **US2** – Step mode: advance one month per click
- **US3** – Modify contributions during step mode

## UC4 – Variable ROI Advanced / Events [INTERMEDIATE]
- **US1** – Modify monthly contributions for specific periods
- **US2** – Import monthly inflation via copy-paste with delimiter selection
- **US3** – Add one-time events and update simulation

## UC5 – Export / Import CSV [INTERMEDIATE]
- **US1** – Export simulation results to CSV for offline analysis
- **US2** – Import CSV data to update or create new simulations
- **US3** – Handle delimiter selection and basic input validation

## UC6 – User Account / History [INTERMEDIATE]
- **US1** – Login / password with SSL and hashing
- **US2** – Implement CSRF protection for sensitive API routes
- **US3** – Sanitize user inputs to prevent XSS

## UC7 - User History [INTERMEDIATE]
- **US4** – Save monthly returns for strategies
- **US5** – View simulation history

## UC7 – Advanced Statistics [ADVANCED]
- **US1** – Calculate average gains and losses per month
- **US2** – Calculate relative and absolute drawdown
- **US3** – Calculate Sharpe, Sortino, and Calmar ratios
- **US4** – Allow user to select a benchmark or risk-free rate for ratio calculations
- **US5** – For Sortino ratio, allow user to choose downside threshold: 0% or risk-free rate

## UC8 – Monte Carlo Simulation [ADVANCED]
- **US1** – Simulate 1000 investments based on inputs
- **US2** – Calculate monthly increament based on theorical maximum drawdown tolerated

## UC9 – Compare Simulations / Strategies [ADVANCED]
- **US1** – Display a comparison of different simulations in a table
- **US2** – Visualize comparisons of different simulations using charts/graphs

## Future Ideas / Nice-to-Have
- Scenario Builder: create custom market scenarios with specific ups/downs to test investment resilience
- Educational Mode: provide tooltips or brief explanations for ratios (Sharpe, Sortino, Calmar)
- Advanced Export/Import: save the entire project with strategies and parameters for sharing