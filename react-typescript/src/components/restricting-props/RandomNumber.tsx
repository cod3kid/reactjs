type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      <h2>
        {value} is a {isPositive && <span>Positive</span>}
        {isNegative && <span>Negative</span>}
        {isZero && <span>Zero</span>}
      </h2>
    </div>
  );
}

export default RandomNumber;
