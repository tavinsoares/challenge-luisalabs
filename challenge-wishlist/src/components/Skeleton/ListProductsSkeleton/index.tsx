import Container from "../../ListProducts/components/Container";

const ListProductsSkeleton = () => {
  return (
    <Container>
      <div className="tw-animate-pulse tw-bg-slate-400 tw-w-52 tw-h-[370px] md:tw-max-w-64 "></div>
      <div className="tw-animate-pulse tw-bg-slate-400 tw-w-52 tw-h-[370px] md:tw-max-w-64 "></div>
      <div className="tw-animate-pulse tw-bg-slate-400 tw-w-52 tw-h-[370px] md:tw-max-w-64 "></div>
      <div className="tw-animate-pulse tw-bg-slate-400 tw-w-52 tw-h-[370px] md:tw-max-w-64 "></div>
    </Container>
  );
};

export default ListProductsSkeleton;
