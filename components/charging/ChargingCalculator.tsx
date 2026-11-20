"use client";

import { useId, useState } from "react";
import { formatMnt, formatNumber } from "@/lib/format";

/** Rough monthly cost: EV at home vs. a petrol car. All defaults are editable examples. */
const EV_KWH_PER_100KM = 16;
const PETROL_L_PER_100KM = 9;
const DAYS = 30;

function NumberInput({
  label,
  unit,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  unit: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-tds-20 text-tds-grey-30">
          {label}
        </label>
        <span className="font-medium text-tds-grey-10">
          {formatNumber(value)} {unit}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-tds-blue-30"
      />
    </div>
  );
}

export function ChargingCalculator() {
  const [km, setKm] = useState(40);
  const [kwhPrice, setKwhPrice] = useState(200);
  const [petrolPrice, setPetrolPrice] = useState(2600);

  const monthlyKm = km * DAYS;
  const evCost = (monthlyKm / 100) * EV_KWH_PER_100KM * kwhPrice;
  const petrolCost = (monthlyKm / 100) * PETROL_L_PER_100KM * petrolPrice;
  const saving = Math.max(0, petrolCost - evCost);

  return (
    <div className="grid grid-cols-1 gap-8 rounded-tds bg-white p-6 md:p-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col gap-6">
        <NumberInput label="Өдөрт явах зай" unit="км" value={km} onChange={setKm} min={5} max={200} step={5} />
        <NumberInput label="Цахилгааны үнэ" unit="₮/кВт·ц" value={kwhPrice} onChange={setKwhPrice} min={50} max={500} step={10} />
        <NumberInput label="Бензиний үнэ" unit="₮/л" value={petrolPrice} onChange={setPetrolPrice} min={1500} max={4000} step={50} />
        <p className="text-tds-20 text-tds-grey-30">
          Тооцоонд цахилгаан машин {EV_KWH_PER_100KM} кВт·ц/100 км, бензин машин {PETROL_L_PER_100KM} л/100 км зарцуулна гэж
          үзсэн. Үнийн утгууд жишээ тул өөрийнхөөрөө тохируулаарай.
        </p>
      </div>

      <dl className="flex flex-col justify-center gap-6" aria-live="polite">
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-tds-20 text-tds-grey-30">Сард явах зай</dt>
          <dd className="text-tds-50 font-medium text-tds-grey-10">{formatNumber(monthlyKm)} км</dd>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-tds-20 text-tds-grey-30">Гэртээ цэнэглэх / сар</dt>
            <dd className="text-tds-60 font-medium text-tds-grey-10">{formatMnt(evCost)}</dd>
          </div>
          <div className="flex flex-col-reverse gap-1">
            <dt className="text-tds-20 text-tds-grey-30">Бензин / сар</dt>
            <dd className="text-tds-60 font-medium text-tds-grey-30">{formatMnt(petrolCost)}</dd>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-1 rounded-tds bg-tds-grey-70 p-4">
          <dt className="text-tds-20 text-tds-grey-30">Сард хэмнэх дүн (ойролцоо)</dt>
          <dd className="text-tds-80 font-medium text-tds-green">{formatMnt(saving)}</dd>
        </div>
      </dl>
    </div>
  );
}
