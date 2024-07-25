function Exhibition() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[36px] mb-[36px]">
        <img
          src="/images/exhibition/1.png"
          alt="exhibition_1"
          className="w-full"
        />
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[36px] mb-[36px]">
            <img
              src="/images/exhibition/2.png"
              alt="exhibition_2"
              className="w-full"
            />
            <img
              src="/images/exhibition/3.png"
              alt="exhibition_3"
              className="w-full"
            />
          </div>
          <img
            src="/images/exhibition/4.png"
            alt="exhibition_4"
            className="w-full"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[36px] mb-[36px]">
        {Array.from({ length: 6 }, (_, i) => (
          <img
            src={`/images/exhibition/${i + 5}.png`}
            alt={`exhibition_${i}`}
            key={i}
            className="w-full h-full"
          />
        ))}
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[36px] mb-[36px]">
        <img
          src="/images/exhibition/11.png"
          alt="exhibition_11"
          className="w-full lg:col-span-6"
        />
        <img
          src="/images/exhibition/12.png"
          alt="exhibition_12"
          className="w-full lg:col-span-3"
        />
        <img
          src="/images/exhibition/13.png"
          alt="exhibition_13"
          className="w-full lg:col-span-3"
        />
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[36px] mb-[36px]">
        <img
          src="/images/exhibition/14.png"
          alt="exhibition_14"
          className="w-full lg:col-span-3"
        />
        <img
          src="/images/exhibition/15.png"
          alt="exhibition_15"
          className="w-full lg:col-span-6"
        />
        <img
          src="/images/exhibition/16.png"
          alt="exhibition_16"
          className="w-full lg:col-span-3"
        />
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[36px] mb-[36px]">
        <img
          src="/images/exhibition/17.png"
          alt="exhibition_17"
          className="w-full lg:col-span-3"
        />
        <img
          src="/images/exhibition/18.png"
          alt="exhibition_18"
          className="w-full lg:col-span-3"
        />
        <img
          src="/images/exhibition/19.png"
          alt="exhibition_19"
          className="w-full lg:col-span-6"
        />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-[36px] mb-[36px]">
        <img
          src="/images/exhibition/20.png"
          alt="exhibition_20"
          className="w-full"
        />
        <img
          src="/images/exhibition/21.png"
          alt="exhibition_21"
          className="w-full"
        />
        <img
          src="/images/exhibition/22.png"
          alt="exhibition_22"
          className="w-full"
        />
        <img
          src="/images/exhibition/23.png"
          alt="exhibition_23"
          className="w-full"
        />
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[36px] mb-[36px]">
        <img
          src="/images/exhibition/24.png"
          alt="exhibition_24"
          className="w-full lg:col-span-3"
        />
        <img
          src="/images/exhibition/25.png"
          alt="exhibition_25"
          className="w-full lg:col-span-3"
        />
        <img
          src="/images/exhibition/26.png"
          alt="exhibition_26"
          className="w-full lg:col-span-6"
        />
      </div>
    </div>
  );
}

export default Exhibition;
