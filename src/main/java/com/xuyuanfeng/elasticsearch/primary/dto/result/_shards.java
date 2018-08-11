/**
  * Copyright 2018 bejson.com 
  */
package com.xuyuanfeng.elasticsearch.primary.dto.result;
/**
 * Auto-generated: 2018-08-02 10:43:30
 *
 * @author bejson.com (i@bejson.com)
 * @website http://www.bejson.com/java2pojo/
 */
public class _shards {

    private int total;
    private int successful;
    private int failed;
    public void setTotal(int total) {
         this.total = total;
     }
     public int getTotal() {
         return total;
     }

    public void setSuccessful(int successful) {
         this.successful = successful;
     }
     public int getSuccessful() {
         return successful;
     }

    public void setFailed(int failed) {
         this.failed = failed;
     }
     public int getFailed() {
         return failed;
     }

}