const DEV_CAPTCHA_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
const CAPTCHA_KEY = '6Leah_IcAAAAAFSNNpsacu67PKHT6SN2V8tb6y2w';
export function getCaptchaKey(): string {
  return CAPTCHA_KEY? CAPTCHA_KEY: DEV_CAPTCHA_KEY;
}