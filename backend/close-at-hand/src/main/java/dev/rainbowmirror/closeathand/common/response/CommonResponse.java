package dev.rainbowmirror.closeathand.common.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommonResponse {
    private Result result;
    private Object data;
    private String message;
    private String errorCode;

    public static <T> CommonResponse success(T data, String message) {
        return CommonResponse.builder()
                .result(Result.SUCCESS)
                .data(data)
                .message(message)
                .build();
    }

    public static <T> CommonResponse success(T data) {
        return success(data, null);
    }

    public static CommonResponse fail(String message, String errorCode) {
        return CommonResponse.builder()
                .result(Result.FAIL)
                .message(message)
                .errorCode(errorCode)
                .build();
    }

    public static CommonResponse fail(ErrorCode errorCode) {
        return CommonResponse.builder()
                .result(Result.FAIL)
                .message(errorCode.getErrorMsg())
                .errorCode(errorCode.name())
                .build();
    }

    public enum Result {
        SUCCESS, FAIL
    }
}
