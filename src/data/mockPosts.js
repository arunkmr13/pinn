const mockPosts = [
  {
    id: "1",
    user: {
      handle: "arun_k",
      initials: "AK",
    },
    caption:
      "Heavy flooding near Bejai junction. Road blocked both sides.",
    timestamp: "2m ago",
    location: "Bejai, Mangaluru",
    image:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
    layers: [true, true, true, true, false],

    trustLayers: {
      device: {
        verified: true,
        detail: "iPhone 15 · C2PA",
      },

      identity: {
        verified: true,
        detail: "Confirmed",
      },

      captionMatch: {
        verified: true,
        detail: "High confidence",
      },

      location: {
        verified: true,
        detail: "Bejai · 2m ago",
      },

      community: {
        verified: false,
        detail: "0 holds yet",
      },
    },
  },

  {
    id: "2",
    user: {
      handle: "nisha_reports",
      initials: "NR",
    },
    caption:
      "Traffic moving slowly near City Centre after signal outage.",
    timestamp: "12m ago",
    location: "Hampankatta, Mangaluru",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    layers: [true, true, true, false, false],

    trustLayers: {
      device: {
        verified: true,
        detail: "Pixel 9 · C2PA",
      },

      identity: {
        verified: true,
        detail: "Confirmed",
      },

      captionMatch: {
        verified: true,
        detail: "Moderate confidence",
      },

      location: {
        verified: false,
        detail: "Location unavailable",
      },

      community: {
        verified: false,
        detail: "0 holds yet",
      },
    },
  },

  {
    id: "3",
    user: {
      handle: "coastal_watch",
      initials: "CW",
    },
    caption:
      "Strong waves near the shoreline this morning. Avoid swimming.",
    timestamp: "21m ago",
    location: "Panambur Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    layers: [true, true, true, true, true],

    trustLayers: {
      device: {
        verified: true,
        detail: "Galaxy S25 · C2PA",
      },

      identity: {
        verified: true,
        detail: "Confirmed",
      },

      captionMatch: {
        verified: true,
        detail: "High confidence",
      },

      location: {
        verified: true,
        detail: "Panambur · 20m ago",
      },

      community: {
        verified: true,
        detail: "Verified by 6 nearby users",
      },
    },
  },

  {
    id: "4",
    user: {
      handle: "megha_live",
      initials: "ML",
    },
    caption:
      "Power restored in most areas around Kadri after outage.",
    timestamp: "34m ago",
    location: "Kadri, Mangaluru",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    layers: [true, true, false, true, false],

    trustLayers: {
      device: {
        verified: true,
        detail: "iPhone 14 · C2PA",
      },

      identity: {
        verified: true,
        detail: "Confirmed",
      },

      captionMatch: {
        verified: false,
        detail: "Low confidence",
      },

      location: {
        verified: true,
        detail: "Kadri · 30m ago",
      },

      community: {
        verified: false,
        detail: "0 holds yet",
      },
    },
  },

  {
    id: "5",
    user: {
      handle: "streetpulse",
      initials: "SP",
    },
    caption:
      "Large crowd gathering near central market for local event.",
    timestamp: "1h ago",
    location: "Central Market",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
    layers: [true, false, true, false, false],

    trustLayers: {
      device: {
        verified: true,
        detail: "OnePlus 13 · C2PA",
      },

      identity: {
        verified: false,
        detail: "Identity pending",
      },

      captionMatch: {
        verified: true,
        detail: "Moderate confidence",
      },

      location: {
        verified: false,
        detail: "Location unavailable",
      },

      community: {
        verified: false,
        detail: "0 holds yet",
      },
    },
  },
];

export default mockPosts;