import React from "react";
import useTickets from "../hooks/useTickets";

const Stats1 = () => {
  const data = useTickets();

  const soldTickets = data.tickets.filter((ticket) => ticket.sold);

  const highestPrice =
    soldTickets.length > 0
      ? Math.max(...soldTickets.map((ticket) => ticket.price))
      : 0;

  const sectionSales = soldTickets.reduce((acc, ticket) => {
    acc[ticket.section] = (acc[ticket.section] || 0) + 1;
    return acc;
  }, {});

  const maxSoldSection = Object.keys(sectionSales).reduce(
    (maxSection, section) => {
      return sectionSales[section] > (sectionSales[maxSection] || 0)
        ? section
        : maxSection;
    },
    ""
  );

  const averagePrice =
    soldTickets.length > 0
      ? (
          soldTickets.reduce((total, ticket) => total + ticket.price, 0) /
          soldTickets.length
        ).toFixed(2)
      : 0;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {/* <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium">
              Total de entradas encontradas:
            </span>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {data.tickets.length}
            </h4>
          </div>
        </div>
      </div> */}
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium">Más barata encontrada:</span>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {data?.tickets[0]?.price} USD
            </h4>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <span className="flex items-center gap-1 text-sm font-medium text-meta-3 undefined ">
            <a
              href={data?.tickets[0]?.link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Visitar
            </a>
          </span>
        </div>
      </div>
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium">
              El precio más alto de las entradas vendidas
            </span>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {soldTickets.length > 0 ? (
                <p>{highestPrice} USD</p>
              ) : (
                <p>No tickets have been sold.</p>
              )}
            </h4>
          </div>
        </div>
      </div>
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium">Sector más vendido:</span>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {maxSoldSection ? (
                <p>{maxSoldSection}</p>
              ) : (
                <p>No tickets have been sold.</p>
              )}
            </h4>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <span className="flex items-center gap-1 text-sm font-medium undefined text-meta-5 ">
            {maxSoldSection ? (
              <p>Vendidas en este sector: {sectionSales[maxSoldSection]}</p>
            ) : (
              <p>No tickets have been sold.</p>
            )}
          </span>
        </div>
      </div>
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium">Precio medio de ventas:</span>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {soldTickets.length > 0 ? (
                <p>{averagePrice} USD</p>
              ) : (
                <p>No tickets have been sold.</p>
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats1;
