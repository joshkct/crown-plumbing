import Image from "next/image";

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Crown Plumbing credentials">
      <div className="shell trust-bar__inner">
        <div className="trust-bar__credential" data-trust-item>
          <Image
            src="/images/iopsa-logo.png"
            alt="Institute of Plumbing South Africa"
            width={158}
            height={50}
          />
          <span>IOPSA member</span>
        </div>
        <div className="trust-bar__credential" data-trust-item>
          <Image
            src="/images/pirb-logo.webp"
            alt="Plumbing Industry Registration Board"
            width={158}
            height={58}
          />
          <span>PIRB registered</span>
        </div>
        <div className="trust-bar__item" data-trust-item>
          <strong>1 year</strong>
          <span>Workmanship guarantee</span>
        </div>
        <div className="trust-bar__item" data-trust-item>
          <strong>24/7</strong>
          <span>Emergency availability</span>
        </div>
      </div>
    </section>
  );
}
