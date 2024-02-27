"use client";

import { useEffect, useRef, useState } from 'react';
const appKey = 'rwtd157qccg7hygpxx29ncrrc';
import { MpSdk } from '@matterport/sdk';
import styles from './Showcase.module.css';

export function Showcase() {
	const [sdk, setSdk] = useState<MpSdk | null>(null); 
  const [started, setStarted] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function loadSDK() {
      // Dynamically import to Avoid SSR / ReferenceError: self is not defined
      const { setupSdk } = await import('@matterport/sdk');
      if (!started && container.current) {
        setStarted(true);
        const mpSdk: MpSdk = await setupSdk(appKey, {
          space: 'ZXCyXEPbdpA',
          container: container.current,
          iframeQueryParams: {
            qs: '1',
          },
        });
        startApp(mpSdk);
      }
    }
    loadSDK();
  }, []);

  return (
    <div className={styles.showcase}>
      <div className={styles.container} ref={container}></div>
    </div>
  );
}

async function startApp(mpSdk: MpSdk) {
  console.log('SDK NPM Package Loaded', mpSdk);
}
