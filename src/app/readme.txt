page.tsx overview:

data variable:
- Manage state using the useState hook.
- type: array.
- Initial state empty array [].
- defined by NavProps['data'] in './types'.
- set asynchronously with the useEffect hook.
- runs once when the component mounts.
- fetchData fetches data from /api/data.
- on successful retrieval and validation, updates the data state using setData(result).

defaultCategory variable:
- type: either Category or null.
- defined by Category in './types'.
- Initial state null.
