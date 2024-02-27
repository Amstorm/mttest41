"use client";

import { useEffect } from 'react';

interface MatterportViewerProps {
  sdkKey: string;
  spaceId: string;
}

const MatterportViewer: React.FC<MatterportViewerProps> = ({ sdkKey, spaceId }) => {
  useEffect(() => {
    // Dynamically import the SDK setup function to ensure it's only executed client-side
    import('@matterport/sdk').then(({ setupSdk }) => {
      setupSdk(sdkKey, { space: spaceId })
        .then(mpSdk => {
          // Start the tour after SDK setup
          mpSdk.Tour.start();
        })
        .catch(error => console.error('Error initializing Matterport SDK:', error));
    });
  }, [sdkKey, spaceId]);

  return (
    <div>
      <p>Loading Matterport Space...</p>
      {/* Placeholder for the Matterport viewer */}
    </div>
  );
};

export default MatterportViewer;
