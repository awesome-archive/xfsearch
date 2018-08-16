package com.xuyuanfeng.utlis;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;

	public class IOUtils 
	{
//		buff缓冲区
	 
	public static void closeQuietly(FileOutputStream outpustream)
	{
		 if(outpustream!=null)
		 {
	      
			 
	    try
		{
	    	outpustream.close();
		} 
	      
	      
	      catch (IOException e)
		{
			// TODO 自动生成的 catch 块
			//e.printStackTrace();
		}
			 
	    
			 
		 }
		 
		 
	}
	public static void closeQuietly(FileInputStream inStream)
	{
		 if(inStream!=null)
		 {
	      
			 
	    try
		{
			inStream.close();
		} 
	      
	      
	      catch (IOException e)
		{
			// TODO 自动生成的 catch 块
			//e.printStackTrace();
		}
			 
	    
			 
		 }
		 
		 
	}
	public static void closeQuietly(Reader reader)
	{
		 if(reader!=null)
		 {
			 try
			 {
				 reader.close();
				 
			 }
			 catch(IOException e )
			 {
				 //
				 
			 }
			 
			 
		 }
		 
		 
	}
	 
	public static void copy(InputStream instream,OutputStream outputstream,int  buff) throws IOException
	{
		byte[] buffer=new byte[buff];
		int len;//计算读入的数据
		if(instream==null)
		{
			throw new IllegalArgumentException("INPUTSTREAM不能为空");
			
		}
		if(outputstream==null)
		{
			throw new IllegalArgumentException("outputstream不能为空");
			
		}
		if(buff<=0)
		{
			
			throw new IllegalArgumentException("outputstream不能为空");
	 
			
		}
		while((len=instream.read(buffer))>0)
		{
				//不知道怎么处理异常就让调用者处理
			outputstream.write(buffer,0,len);
			
		}
	 
	}
	 
	public static void copy(InputStream instream,OutputStream outputstream) throws IOException
	{
		
	copy(instream,outputstream,1024);
	}

}
