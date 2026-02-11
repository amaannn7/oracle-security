export default function JsonLd() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Oracle Services (Pvt) Ltd',
        url: 'https://oracleservices.lk',
        logo: {
            '@type': 'ImageObject',
            url: 'https://oracleservices.lk/logo new.jpg',
            width: 512,
            height: 512,
        },
        description:
            'Premier multi-sector service provider in Sri Lanka offering Security, Care, and Logistics solutions.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'No. 16/1, Wanatha Road, Gangodawila',
            addressLocality: 'Nugegoda',
            addressCountry: 'LK',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+94-112-836-238',
                contactType: 'customer service',
                areaServed: 'LK',
                availableLanguage: ['English', 'Sinhala', 'Tamil'],
            },
            {
                '@type': 'ContactPoint',
                telephone: '+94-777-123-456',
                contactType: 'sales',
                areaServed: 'LK',
            },
        ],
        sameAs: [],
        foundingDate: '2008',
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 1000,
        },
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://oracleservices.lk/#business',
        name: 'Oracle Services (Pvt) Ltd',
        image: 'https://oracleservices.lk/logo new.jpg',
        logo: 'https://oracleservices.lk/logo new.jpg',
        url: 'https://oracleservices.lk',
        telephone: '+94-112-836-238',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'No. 16/1, Wanatha Road, Gangodawila',
            addressLocality: 'Nugegoda',
            addressCountry: 'LK',
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
        },
        priceRange: '$$',
        areaServed: {
            '@type': 'Country',
            name: 'Sri Lanka',
        },
    };

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Security Services',
        provider: {
            '@type': 'Organization',
            name: 'Oracle Services (Pvt) Ltd',
            url: 'https://oracleservices.lk',
        },
        areaServed: {
            '@type': 'Country',
            name: 'Sri Lanka',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Security Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Security Guard Services',
                        description:
                            'Professional trained security guards for corporate, industrial, and residential protection.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Cash Management & Escort Services',
                        description:
                            'Secure cash-in-transit and escort services with armed security personnel.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Event Security',
                        description:
                            'Comprehensive security solutions for events, functions, and public gatherings.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'VIP Protection',
                        description:
                            'Executive protection and close protection services for VIPs and dignitaries.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Caregiving Services',
                        description:
                            'Professional caregiving and eldercare services with trained caregivers.',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Logistics & Transport',
                        description:
                            'Reliable logistics, transport, and distribution services across Sri Lanka.',
                    },
                },
            ],
        },
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Oracle Services (Pvt) Ltd',
        url: 'https://oracleservices.lk',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://oracleservices.lk/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
        </>
    );
}
