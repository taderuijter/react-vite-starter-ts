export interface CookiesProps {
  body: React.ReactNode;
  navigation: React.ReactNode;
  toggle: boolean;
}

export const Cookies = ({ body, navigation, toggle }: CookiesProps) => (
  <>
    {toggle && (
      <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
        <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
          <p className="text-sm leading-6 text-gray-900">{body}</p>
          <div className="mt-4 flex items-center gap-x-2">{navigation}</div>
        </div>
      </div>
    )}
  </>
);
