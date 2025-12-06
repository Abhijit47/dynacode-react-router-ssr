// this would break the server
export const supportsVibrationAPI = 'vibrate' in window.navigator;
export const supportsLocalStorage = 'localStorage' in window;
export const supportsClipboardAPI = 'clipboard' in window.navigator;
export const supportsTouchEvents =
  'ontouchstart' in window || navigator.maxTouchPoints > 0;
export const supportsServiceWorker = 'serviceWorker' in navigator;
export const supportsNotifications = 'Notification' in window;
export const supportsDarkModeMediaQuery =
  window.matchMedia('(prefers-color-scheme)').media !== 'not all';
export const supportsWebAssembly = typeof WebAssembly === 'object';
export const supportsWebGL = (() => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
})();
export const supportsServiceWorkerPushManager = 'PushManager' in window;
export const supportsIntersectionObserver = 'IntersectionObserver' in window;
export const supportsResizeObserver = 'ResizeObserver' in window;
export const supportsMediaDevices = 'mediaDevices' in navigator;
export const supportsSpeechSynthesis = 'speechSynthesis' in window;
export const supportsWebRTC = 'RTCPeerConnection' in window;
export const supportsFileSystemAccessAPI = 'showOpenFilePicker' in window;
export const supportsPaymentRequestAPI = 'PaymentRequest' in window;
export const supportsBackgroundSync = 'SyncManager' in window;
export const supportsClipboardReadWrite = !!(
  navigator.clipboard &&
  (navigator.clipboard.readText || navigator.clipboard.writeText)
);
export const supportsWebShareAPI = 'share' in navigator;
export const supportsWakeLockAPI = 'wakeLock' in navigator;
export const supportsNativeLazyLoading =
  'loading' in HTMLImageElement.prototype;
export const supportsCredentialManagementAPI = 'credentials' in navigator;
export const supportsHIDAPI = 'hid' in navigator;
export const supportsGamepadAPI = 'getGamepads' in navigator;
export const supportsWebAuthn = 'PublicKeyCredential' in window;
export const supportsOrientationSensor =
  'AbsoluteOrientationSensor' in window &&
  'RelativeOrientationSensor' in window;
export const supportsAmbientLightSensor = 'AmbientLightSensor' in window;
export const supportsMagnetometer = 'Magnetometer' in window;
export const supportsProximitySensor = 'ProximitySensor' in window;
export const supportsGeolocationAPI = 'geolocation' in navigator;
export const supportsNetworkInformationAPI = 'connection' in navigator;
export const supportsBatteryStatusAPI = 'getBattery' in navigator;
export const supportsClipboardImagePaste = (() => {
  if (!supportsClipboardAPI) return false;
  let supportsImage = false;
  navigator.clipboard
    .read()
    .then((items) => {
      for (const item of items) {
        if (
          item.types.includes('image/png') ||
          item.types.includes('image/jpeg')
        ) {
          supportsImage = true;
          break;
        }
      }
    })
    .catch(() => {
      supportsImage = false;
    });
  return supportsImage;
})();
export const supportsTouchscreen = (() => {
  if (!supportsTouchEvents) return false;
  return navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
})();
export const supportsClipboardAsyncClipboardItems = (() => {
  if (!supportsClipboardAPI) return false;
  return 'ClipboardItem' in window;
})();
export const supportsFileSystemDirectoryAccess =
  'showDirectoryPicker' in window;
export const supportsVirtualKeyboardAPI = 'virtualKeyboard' in navigator;
export const supportsMediaSessionAPI = 'mediaSession' in navigator;
export const supportsWebGPU = 'gpu' in navigator;
export const supportsOffscreenCanvas = 'OffscreenCanvas' in window;
export const supportsWebCodecs =
  'VideoDecoder' in window && 'AudioDecoder' in window;
export const supportsShapeDetectionAPI =
  'FaceDetector' in window &&
  'BarcodeDetector' in window &&
  'TextDetector' in window;
export const supportsEyeDropperAPI = 'EyeDropper' in window;
export const supportsCSSContainerQueries = (() => {
  return CSS.supports('container-type', 'size');
})();
export const supportsCSSBackdropFilter = (() => {
  return (
    CSS.supports('backdrop-filter', 'blur(5px)') ||
    CSS.supports('-webkit-backdrop-filter', 'blur(5px)')
  );
})();
export const supportsCSSGrid = (() => {
  return CSS.supports('display', 'grid');
})();
export const supportsCSSVariables = (() => {
  return CSS.supports('--fake-var', '0');
})();
export const supportsCSSScrollSnap = (() => {
  return CSS.supports('scroll-snap-type', 'y mandatory');
})();

export const canUseDOM = typeof window !== 'undefined';
export const hasWebGL = !!window.WebGLRenderingContext;
