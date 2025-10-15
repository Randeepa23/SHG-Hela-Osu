import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Performance monitoring utility
export const performanceMonitor = {
  // Core Web Vitals metrics
  vitals: {
    CLS: 0,
    INP: 0,
    FCP: 0,
    LCP: 0,
    TTFB: 0,
  },

  // Initialize performance monitoring
  init() {
    this.measureVitals();
    this.measureCustomMetrics();
  },

  // Measure Core Web Vitals
  measureVitals() {
    onCLS((metric) => {
      this.vitals.CLS = metric.value;
      this.reportMetric('CLS', metric.value);
    });

    onINP((metric) => {
      this.vitals.INP = metric.value;
      this.reportMetric('INP', metric.value);
    });

    onFCP((metric) => {
      this.vitals.FCP = metric.value;
      this.reportMetric('FCP', metric.value);
    });

    onLCP((metric) => {
      this.vitals.LCP = metric.value;
      this.reportMetric('LCP', metric.value);
    });

    onTTFB((metric) => {
      this.vitals.TTFB = metric.value;
      this.reportMetric('TTFB', metric.value);
    });
  },

  // Measure custom performance metrics
  measureCustomMetrics() {
    // Time to interactive
    if ('performance' in window && 'getEntriesByType' in performance) {
      setTimeout(() => {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          const metrics = {
            domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart,
            loadComplete: navigationEntry.loadEventEnd - navigationEntry.fetchStart,
            firstByte: navigationEntry.responseStart - navigationEntry.fetchStart,
          };
          
          this.reportMetric('DOM_CONTENT_LOADED', metrics.domContentLoaded);
          this.reportMetric('LOAD_COMPLETE', metrics.loadComplete);
          this.reportMetric('FIRST_BYTE_CUSTOM', metrics.firstByte);
        }
      }, 0);
    }
  },

  // Report metric (you can send to analytics service)
  reportMetric(name: string, value: number) {
    console.log(`Performance Metric - ${name}: ${value}ms`);
    
    // Optional: Send to analytics service
    // analytics.track('performance_metric', { name, value });
  },

  // Get performance summary
  getSummary() {
    return {
      vitals: this.vitals,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      connection: (navigator as any).connection || null,
    };
  },

  // Check if metrics meet performance targets
  checkTargets() {
    const targets = {
      LCP: 2500, // 2.5s
      INP: 200,  // 200ms
      CLS: 0.1,  // 0.1
      FCP: 1800, // 1.8s
      TTFB: 800, // 800ms
    };

    const results = Object.entries(targets).map(([metric, target]) => ({
      metric,
      value: this.vitals[metric as keyof typeof this.vitals],
      target,
      passed: this.vitals[metric as keyof typeof this.vitals] <= target,
    }));

    return results;
  }
};

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Start monitoring after page load
  if (document.readyState === 'complete') {
    performanceMonitor.init();
  } else {
    window.addEventListener('load', () => {
      performanceMonitor.init();
    });
  }
}