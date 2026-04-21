import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  // Relative asset URLs so /index.html vs /folder/ hosting and partial uploads mis-resolve fewer paths.
  // Always deploy the full `dist/` output after `npm run build`.
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        services: 'services.html',
        industry: 'industry.html',
        blog: 'blog.html',
        jobs: 'jobs.html',
        zld: 'zld.html',
        zld_lowTds: 'zld_lowTds.html',
        ro_reject: 'ro_reject.html',
        high_Tds: 'high_Tds.html',
        high_concration: 'high_concration.html',
        privacy: 'privacy-policy.html',
        terms: 'terms.html',
        blog_zld_guide: 'blog/zld-guide-2024.html',
        blog_zld_cost: 'blog/zld-cost-comparison.html',
        blog_zld_systems: 'blog/zld-systems.html',
        blog_ro_reject: 'blog/ro-reject-treatment-guide.html',
        blog_leachate: 'blog/leachate-treatment-guide.html',
        blog_high_tds_zld: 'blog/high-tds-zld-roadmap-india.html',
        blog_mvrs: 'blog/mvrs-non-thermal-evaporation.html',
        blog_evap_rate: 'blog/evaporation-rate-design-factors.html',
        blog_capex_opex: 'blog/capex-opex-water-recycling.html',
        blog_atm_maint: 'blog/atm-maintenance-field-guide.html',
        blog_pulp_paper: 'blog/pulp-paper-effluent-zld.html',
        blog_food_bev: 'blog/food-beverage-effluent-recycling.html',
        blog_steel: 'blog/steel-industry-wastewater-treatment.html',
        blog_brewery: 'blog/brewery-distillery-spent-wash-management.html',
        blog_metal_finish: 'blog/metal-finishing-wastewater-compliance.html',
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
