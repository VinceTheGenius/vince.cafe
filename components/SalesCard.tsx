import Image from './Image'
import Link from './Link'

const Card = ({ title, description, price, imgSrc, href }) => (
  <div className="p-2 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="h-full overflow-hidden hover:bg-opacity-20 rounded-md border-opacity-60 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 duration-200">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center lg:h-48 md:h-36"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 font-semibold mt-3.5">
          Price: {price}
        </p>
      </div>
    </div>
  </div>
)

export default Card
