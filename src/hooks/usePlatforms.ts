import platforms from '../data/platforms';

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

// const usePlatforms = () => useData<Platform>('platforms/lists/parents');
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
