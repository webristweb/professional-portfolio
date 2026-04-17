/**
 * Simple Analytics Tracker
 * Tracks page views and user interactions
 */

const Analytics = {
    // Track page view
    trackPageView: function() {
        const pageData = {
            url: window.location.href,
            title: document.title,
            timestamp: new Date().toISOString(),
            referrer: document.referrer,
            userAgent: navigator.userAgent
        };
        
        console.log('Page View:', pageData);
        // You can send this to your analytics service
        // this.sendToServer('pageview', pageData);
    },

    // Track button clicks
    trackClick: function(element, label) {
        const clickData = {
            element: element,
            label: label,
            timestamp: new Date().toISOString()
        };
        
        console.log('Click Event:', clickData);
        // this.sendToServer('click', clickData);
    },

    // Track section views (when user scrolls to a section)
    trackSectionView: function(sectionName) {
        const sectionData = {
            section: sectionName,
            timestamp: new Date().toISOString()
        };
        
        console.log('Section View:', sectionData);
        // this.sendToServer('section_view', sectionData);
    },

    // Track form submissions
    trackFormSubmit: function(formName) {
        const formData = {
            form: formName,
            timestamp: new Date().toISOString()
        };
        
        console.log('Form Submit:', formData);
        // this.sendToServer('form_submit', formData);
    },

    // Send data to server (implement this based on your backend)
    sendToServer: function(eventType, data) {
        // Example implementation:
        // fetch('/api/analytics', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         event: eventType,
        //         data: data
        //     })
        // });
    },

    // Initialize analytics
    init: function() {
        // Track initial page view
        this.trackPageView();

        // Track all button clicks
        document.querySelectorAll('a, button').forEach(element => {
            element.addEventListener('click', () => {
                const label = element.textContent || element.getAttribute('aria-label') || 'Unknown';
                this.trackClick(element.tagName, label);
            });
        });

        // Track section views using Intersection Observer
        const sections = document.querySelectorAll('section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id || 'unknown';
                    this.trackSectionView(sectionId);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => sectionObserver.observe(section));

        // Track time on page
        let startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            console.log('Time spent on page:', timeSpent, 'seconds');
        });
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Analytics.init());
} else {
    Analytics.init();
}

// Export for use in other scripts
window.Analytics = Analytics;
