import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  // Deploying at domain root on Vercel; use absolute root asset paths.
  base: '/',
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
        blog_cetp_cluster: 'blog/cetp-design-industrial-clusters.html',
        blog_textile_dye_recovery: 'blog/textile-dye-bath-recovery-zld.html',
        blog_pharma_cod: 'blog/pharma-high-cod-effluent-treatment.html',
        blog_fertilizer_ammonia: 'blog/fertilizer-effluent-ammonia-nitrogen-control.html',
        blog_cooling_blowdown: 'blog/cooling-tower-blowdown-reuse-roadmap.html',
        blog_sludge_min: 'blog/etp-sludge-minimization-guide.html',
        blog_brine_vs_pond: 'blog/brine-concentrator-vs-solar-ponds.html',
        blog_battery_wastewater: 'blog/battery-manufacturing-wastewater-zld.html',
        blog_semiconductor_upw: 'blog/semiconductor-upw-reject-recovery.html',
        blog_electroplating: 'blog/electroplating-chromium-recovery-guide.html',
        blog_dairy_zld_staging: 'blog/dairy-effluent-zld-staging.html',
        blog_sugar_brine: 'blog/sugar-mill-brine-management.html',
        blog_thermal_blowdown: 'blog/thermal-power-blowdown-minimization.html',
        blog_petro_brine: 'blog/petrochemical-brine-segregation.html',
        blog_desal_brine: 'blog/desalination-brine-disposal-options.html',
        blog_tannery_zld: 'blog/tannery-chrome-sulfide-zld.html',
        blog_pulp_color_brine: 'blog/pulp-paper-color-cod-brine.html',
        blog_coffee_biogas: 'blog/coffee-effluent-biogas-reuse.html',
        blog_battery_hydromet: 'blog/battery-recycling-hydromet-brine.html',
        blog_glass_silica: 'blog/glass-plant-silica-water-reuse.html',
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
