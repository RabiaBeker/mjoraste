export interface ApiResponse <Type> {
  data: Type;
  message: string;
  success: boolean;
}
